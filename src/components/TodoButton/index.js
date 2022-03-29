import styled from 'styled-components'
import PropTypes from 'prop-types'

const TodoButton = props => {
  return (
    <Style {...props}>
      {props.children}
    </Style>
  )
}

TodoButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.element,
  disabled: PropTypes.bool,
  size: PropTypes.string
}

const Style = styled.button`
  background-color: #426EFF;
  color: #FFFFFF;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:disabled {
    background-color: #00000020;
  }
`

export default TodoButton
