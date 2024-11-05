import { useState } from "react"
import { Todos } from "./Todos"

export function FetchTodos() {
    const [todos, setTodos] = useState([]);

    fetch("http://localhost:3000/todos")
        .then(async function (res) {
            const json = await res.json()
            setTodos(json.todos)
        })
    const [show, setShow] = useState(false)
    // hide === true ? <h1>show</h1> : <h1>hide</h1>
    // show === true ? <Todos /> : <br></br>
    // hide === true ? <br></br> : <Todos />
    return (
        <>
            <br></br>
            <button onClick={() => {
                setShow(true)
            }
            } style={{ padding: 12, margin: 10, backgroundColor: "#FF69B4", border: "none" }}>Show</button>
            <button onClick={() => {
                setShow(false)
            }} style={{ padding: 12, margin: 10, backgroundColor: "#FF69B4", border: "none" }}>Hide</button>
            {
                show === true ? <Todos todos={todos} /> : setTodos([])
            }
        </>
    )
}