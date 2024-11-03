import { useState } from 'react'
import './App.css'
function App() {
  const [counter,setCounter] = useState(0)

  return (
    <>
      <h1>React</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>Add value</button>
      <button onClick={() => setCounter(counter - 1)}>Remove value</button>
      <footer>Result {counter}</footer>
    </>
  )
}

export default App
