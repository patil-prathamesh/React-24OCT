const express = require('express')
const { createTodo, updateTodo } = require('./types')
const { Todo } = require('./db')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5173'
}))

// LNtEj8QJxovLqhzu
// mongodb+srv://prthmsh:LNtEj8QJxovLqhzu@todo-cluster.z8juj.mongodb.net/
mongoose.connect('mongodb+srv://prthmsh:LNtEj8QJxovLqhzu@todo-cluster.z8juj.mongodb.net/TODO?retryWrites=true&w=majority&appName=todo-cluster')
.then(() => {
    console.log("Database connected successfully!!")
})

app.post('/todo', function (req, res) {
    const createPayload = req.body
    const parsedPayload = createTodo.safeParse(createPayload)
    if (parsedPayload.success) {
        //mongo
        Todo.create({
            title: createPayload.title,
            description: createPayload.description,
            completed: false
        })
            .then(() => {
                res.json({
                    msg: "Todo created successfully👍👍"
                })
            })
            .catch((error) => {
                res.json({
                    msg: "Something went wrong!"
                })
            })
    } else {
        res.status(411).json({
            msg: "Ivalid post details!"
        })
    }
})

app.get('/todos',async function (req, res) {

    const todos = await Todo.find({});
    res.json({
        todos
    })
   
    // Todo.find({})
    //     .then((data) => {
    //         res.json({ data })
    //     })
    //     .catch((error) => {
    //         console.log("hii")
    //         res.json({
    //             msg: "Something went wrong!!"
    //         })
        // })
})

app.put('/completed', function (req, res) {
    const id = req.body
    const parsedId = updateTodo.safeParse(id)
    if (parsedId.success) {
        Todo.updateOne(
            { _id: id.id },
            { $set: { completed: true } }
        ) 
            .then(async () => {
                const todos = await Todo.find({})
                res.json(todos)
            })
            .catch((error) => {
                res.json({ error })
            })
    } else {
        res.json({
            msg: "Invalid id!!"
        })
    }
})

app.listen(3000)