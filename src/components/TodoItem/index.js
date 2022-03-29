import styled from 'styled-components'
import PropTypes from 'prop-types'

const TodoItem = props => {
  const deleteToggleItem = () => {
    props.deleteHandler(props.uuid, props.isDeleted)
  }

  const completeToggleItem = () => {
    props.completeHandler(props.uuid, props.isCompleted)
  }

  return (
    <Style isCompleted={props.isCompleted} isDeleted={props.isDeleted}>
      <div className="left">
        <div className="btn-complete" onClick={completeToggleItem}>
          <div className="circle"></div>
        </div>
        <div className="label">
          {props.label}
        </div>
      </div>
      <div className="right">
        <div className="btn-delete" onClick={deleteToggleItem}>
          { props.isDeleted ? '복구' : '삭제' }
        </div>
      </div>
    </Style>
  )
}

TodoItem.defaultProps = {
  uuid: 0,
  isDeleted: false,
  isCompleted: false
}

TodoItem.propTypes = {
  uuid: PropTypes.number,
  label: PropTypes.string,
  deleteHandler: PropTypes.func,
  completeHandler: PropTypes.func,
  isDeleted: PropTypes.bool,
  isCompleted: PropTypes.bool,
}

const Style = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  box-shadow: 0px 2px 16px #00000015;
  .left {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .label {
    text-decoration: ${({isDeleted}) => isDeleted ? 'line-through' : 'none'};
    color: ${({isDeleted, isCompleted}) => isDeleted || isCompleted ? '#00000044' : '#000000'};
  }
  .btn-complete {
    width: 20px;
    height: 20px;
    border: 1px solid #dddddd;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    opacity: ${({isDeleted}) => isDeleted ? 0 : 1};
    .circle {
      width: 14px;
      height: 14px;
      border-radius: 10px;
      background-color: ${({isCompleted}) => isCompleted ? '#426EFF' : 'transparent'};
    }
  }
  .btn-delete {
    color: ${({isDeleted}) => isDeleted ? '#426EFF' : '#FF0000'};
    cursor: pointer;
  }
`

export default TodoItem
