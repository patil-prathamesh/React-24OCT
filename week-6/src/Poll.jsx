import { useEffect, useState } from "react"

export function Poll() {
    const [timer, setTimer] = useState(0)
    const [todos, setTodos] = useState([])

    setInterval(() => {
        setTimer(timer+1)
        // console.log(timer)
    },100000)

    useEffect(() => {
        // fetch('https://sum-server.100xdevs.com/todos')
        //     .then((res) => {
        //         const json = res.json()
        //         setTodos(json.todos)
        //     })
        console.log("hii")
    }, [timer])
    return (
        <div>
            {
                todos.map((todo) => {
                    return <div>
                        <h1>{todo.id}</h1>
                        <h2>{todo.title}</h2>
                        <h2>{todo.description}</h2>
                    </div>
                })
            }
        </div>
    )
}