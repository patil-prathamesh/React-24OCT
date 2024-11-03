import { useState } from 'react'
function App() {
  const [todos, setTodos] = useState([])
  function addTodo() {
    setTodos([...todos,{
      title: "Random",
      description: Math.random()*10,
      completed: true
    }])
  }
  return (
    <>
      <button onClick={addTodo}>Add Todo</button>
      {
        todos.map((todo) => {
          return <Todo title={todo.title} description={todo.description}></Todo>
        })
      }
    </>
  )
}

function Todo(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <h3>{props.description}</h3>
    </>
  )
}

export default App
