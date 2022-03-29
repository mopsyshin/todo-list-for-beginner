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
  width: 100%;
  background-color: #0000000d;
  border: none;
  appearance: none;
  padding: 11px 13px;
  border-radius: 4px;
  &::placeholder {
    color: #00000050;
  }
`

export default TodoInput
