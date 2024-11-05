import { useState } from 'react'
import './App.css'

function App() {
  const [title,setTitle] = useState('')
  const [description, setDescription] = useState('')

  return (
    <>
      <CreateTodo title={title} description={description} setTitle={setTitle} setDescription={setDescription}/>
      <br></br>
      <DisplayTodo />
    </>
  )
}

function CreateTodo(props) {
  function handleTitleChange(event) {
    props.setTitle(event.target.value)
  }
  function handleDescriptionChange(event) {
    props.setDescription(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:3000/todo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'  // Specify JSON format
      },
      body: JSON.stringify({
        title: props.title,
        description: props.description
      })
    })
    .then((resp) => {
      alert("Todo created ✨✨")
    })
      
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        Title <input 
        type="text" 
        value={props.title}
        onChange={handleTitleChange}
        />
        <br></br>
        Description <input 
        type="text" 
        value={props.description}
        onChange={handleDescriptionChange}
        />
        <br></br>
        <button type='submit'>Create</button>
        <br />
      </form>
    </>
  )
}

function DisplayTodo() {
  const [todos,setTodos] = useState([])
  async function showTodos() {
    const data = await fetch('http://localhost:3000/todos')
    const finalData = await data.json()
    console.log(finalData.todos)
    setTodos(finalData.todos)
  }
  return (
    <>
      <button onClick={showTodos}>Show</button>
      {
        todos.map((todo,index) => {
          return <Todo todos={todos} setTodos={setTodos} id={todo._id} index={index} title={todo.title} description={todo.description} completed={todo.completed}/>
        })
      }
    </>
  )
}

function Todo(props) {
  function updateTodo(id) {
    console.log(id)
    fetch('http://localhost:3000/completed', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "id":id
      })
    })
    .then(async (data) => {
      const uData = await data.json()
      props.setTodos(uData)
    })
  }
  return (
    <>
      <h3>{props.index+1}) Title: {props.title}</h3>
      <h3>Description: {props.description}</h3>
      <h3>Completed: {JSON.stringify(props.completed)}</h3>
      <button onClick={() => updateTodo(props.id)}>Update</button>
    </>
  )
}

export default App
