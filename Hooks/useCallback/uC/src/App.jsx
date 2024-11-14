import { useState, memo, useCallback } from 'react'
import './App.css'
import {Callback} from './Callback'
function App() {
  // const [count, setCount] = useState(0)

  // const onClick = useCallback(() => {
  //   console.log("child clicked")
  // }, [])

  // let sum = 0
  // const expensiveCal = useMemo(() => {
  //   let sum = 0
  //   for(let i = 0; i <= 100000; i++) {
  //     sum += i
  //   }
  //   return sum
  // })

  // useCallback(
  //   () => {
  //     first
  //   },
  //   [second],
  // )
  

  return (
    <Callback />
    // <div>
    //   <Child onClick={onClick} />
    //   <button onClick={() => setCount(count + 1)}>Click me {count}</button>
    // </div>
  )
}

// const Child = memo(({ onClick }) => {
//   console.log("Child render!!")

//   return <div>
//     <button onClick={onClick}>Button Clicked</button>
//   </div>
// })

export default App
