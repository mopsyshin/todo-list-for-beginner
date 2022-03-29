import styled from 'styled-components'
import PropTypes from 'prop-types'

const TodoInput = props => {
  return <Style {...props}/>
}

TodoInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
}

const Style = styled.input`

`

export default TodoInput
