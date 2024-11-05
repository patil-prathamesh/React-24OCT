import { useState } from "react"

export function CreateTodo() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    return <div>
        <input style={{ padding: 12, margin: 10 }}
            type="text"
            placeholder="title"
            onChange={function (e) {
                setTitle(e.target.value)
            }}
        />
        <br />
        <input style={{ padding: 12, margin: 10 }}
            type="text"
            placeholder="description"
            onChange={(e) => {
                setDescription(e.target.value)
            }}
        />
        <br />

        <button onClick={() => {
            fetch('http://localhost:3000/todo', {
                method: 'POST',
                body: JSON.stringify({
                    title: title,
                    description: description
                }),
                headers: {
                    "content-type": "application/json"
                }
            })
                .then(() => {
                    alert('Todo added🔥🔥')
                })
        }}
            style={{ padding: 12, marginLeft: 55, marginTop: 10, backgroundColor: "#4682B4", border: "none" }}>
            Add a todo
        </button>
    </div>
}