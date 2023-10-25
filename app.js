const express = require("express")
const app = express()
const cors = require("cors")

// Express Global Middlewares
app.use(cors({
    origin: "*"
}))

// Express Routes

app.get("/", (req, res) => {
    res.send("<h1> Hello World </h1>")
})

const port = 9000

app.listen(port, () => {
    console.log(`listening on port: ${port}`)
})