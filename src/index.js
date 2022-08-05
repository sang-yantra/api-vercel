'use strict'

const express = require("express")
const app = express();
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log("server running on port : ", PORT)
})

app.get("/", (req, res, next) => {
    res.json("server is up...😎")
})