const express = require("express")
const cors = require('cors')
const app = express()

require('dotenv').config()

app.use(express.json())
app.use(cors());

app.get('/', (req, res) => {
    res.json({
        message: 'test - 🦄🌈✨👋🌎🌍🌏✨🌈🦄',
    });
});

const bookRouter = require('./routes/book.router')
app.use("/api/v1/books", bookRouter)

app.listen(process.env.PORT, () => console.log("Server is running on port 5000"))