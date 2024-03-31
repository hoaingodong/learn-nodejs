import express from 'express'

const app = express()

const port = 3000;
const hostname = "localhost";

app.get('/', (req, res) => {
    res.end('Hello World!')
})

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})