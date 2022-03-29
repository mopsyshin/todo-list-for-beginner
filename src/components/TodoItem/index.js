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
`

export default TodoItem
