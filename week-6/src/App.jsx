import './App.css'
import { useState } from 'react'
import { Todo } from './Todo'
let key = 4

function App() {
  const [todos, setTodos ] = useState([
    {
      id: 1,
      title: "hi1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, minus"
    },
    {
      id: 2,
      title: "hii2",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, reprehenderit."
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non temporibus eos eum."
    }
  ])
  function addTodo() {
    setTodos([{title:"new title", description: "new description", id: key++},...todos])
  }
  return (
    <>
        <button onClick={addTodo}>Add Todo</button>
        {
          todos.map(function (todo) {
            return <Todo key={todo.id} title={todo.title} description={todo.description}/>
          })
        }
    </>
  )
}

function HeaderWithButton() {
  const [title,setTitle] = useState("My name is patil")
  function updateTitle() {
    setTitle('My name is '+Math.random())
  }
  return (
    <>
      <button onClick={updateTitle}>Click me to change the title</button>
      <Header title={title}/>
      <Header title={title}/>
      <Header title={title}/>
    </>
  )
}

function Header({ title }) {
  return (
      <div>
        hii{title}
      </div>
  )
}

export default App
