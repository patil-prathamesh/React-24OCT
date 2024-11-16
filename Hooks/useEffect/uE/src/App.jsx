import './App.css'
// import {Memoo} from './Memoo'

import { UseRef } from './UseRef'

function App() {
  // const [inputValue, setInputValue] = useState(0)
  // const [count, setCount] = useState(0)

  // let sum = 0

  // for (let i = 1; i <= inputValue; i++) {
  //   console.log('rendered ' + (rc++))
  //   sum += i
  // }

  // let sum = useEffect(() => {
  //   let sum = 0;
  //   for (let i = 1; i <= inputValue; i++) {
  //         console.log('rendered ' + (rc++))
  //         sum += i
  //   }
  //   return sum
  // }, [inputValue])

  return (
    <div>
      {/* <UseEffect/> */}
      <UseRef />
    </div>
    // <div>
    //   <input
    //     type="text"
    //     onChange={(e) => {
    //       setInputValue(e.target.value)
    //     }}
    //   />
    //   <h4>Sum is {sum}</h4>
    //   <button onClick={() => setCount(count + 1)}>Counter ({count})</button>
    // </div>
    // <>
    //   <button onClick={() => setId(1)}>1</button>
    //   <button onClick={() => setId(2)}>2</button>
    //   <button onClick={() => setId(3)}>3</button>
    //   <button onClick={() => setId(4)}>4</button>
    //   <Todo id={id} />
    // </>
  )
}

// function Todo({ id }) {
//   const [todo, setTodo] = useState({})
//   useEffect(() => {
//     axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
//       .then((res) => {
//         setTodo(res.data)
//         console.log(res)
//       })
//   }, [id])
//   return (
//     <div>
//       <h1>##{todo.title}</h1>
//       <h4>##{todo.body}</h4>
//     </div>
//   )
// }
export default App
