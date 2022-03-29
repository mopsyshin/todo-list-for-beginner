import styled from 'styled-components'

const TodoHeader = () => {
  return (
    <Style>
      <h1>Todo List</h1>
    </Style>
  )
}

const Style = styled.div`
  text-align: center;
  padding: 48px;
  h1 {
    margin: 0;
  }
`

export default TodoHeader
