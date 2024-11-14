const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())

app.get('/todo', (req, res) => {
    const id = req.query.id
    const random = Math.random()
    switch (id) {
        case "1":
            res.json({
                title: "Title 1",
                description: "Description 1"
            })
            break;
        case "2":
            res.json({
                title: "Title 2",
                description: "Description 2"
            })
            break;
        case "3":
            res.json({
                title: "Title 3",
                description: "Description 3"
            })
            break;
        case "4":
            res.json({
                title: "Title 4",
                description: "Description 4"
            })
            break;
        default:
            break;
    }

})

app.listen(3000)