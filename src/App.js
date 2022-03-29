import { useState } from "react";
import styled from "styled-components";
import TodoButton from "./components/TodoButton";
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  const [ todos, setTodos ] = useState([])
  const [ value, setValue ] = useState('')
  const [ countForKey, setCountForKey ] = useState(0)

  const addTodo = () => {
    setTodos(prev => [
      ...prev,
      {
        uuid: countForKey,
        label: value,
        isDeleted: false,
        isCompleted: false,
      }
    ])
    setCountForKey(prev => prev + 1)
    setValue('')
  }

  const onChangeHandler = e => {
    setValue(e.target.value)
  }

  const deleteHandler = uuid => {
    const result = todos.map(todo => {
      if (todo.uuid === uuid) {
        return {
          ...todo,
          isDeleted: !todo.isDeleted
        }
      }
      return todo
    })
    setTodos(result)
  }

  const completeHandler = uuid => {
    const result = todos.map(todo => {
      if (todo.uuid === uuid) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted
        }
      }
      return todo
    })
    setTodos(result)
  }

  return (
    <>
      <GlobalStyle/>
      <AppStyle className="App">
        <div className="wrapper">
          <TodoHeader/>
          <div className="input-area">
            <TodoInput value={value} onChange={onChangeHandler}/>
            <TodoButton onClick={addTodo} disabled={value.trim() === ''}>추가하기</TodoButton>
          </div>
          <div className="todo-list">
            {
              todos.map(todo => <TodoItem {...todo} 
                                          key={todo.uuid}
                                          deleteHandler={deleteHandler}
                                          completeHandler={completeHandler}/>)
            }
          </div>
        </div>
      </AppStyle>
    </>
  );
}

const AppStyle = styled.div`
  display: flex;
  justify-content: center;
  .wrapper {
    width: 100%;
    max-width: 375px;
    margin: 0 auto;
  }
  .todo-list {
    width: 100%;
  }
`

export default App;
