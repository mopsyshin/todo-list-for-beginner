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

`

export default TodoButton
