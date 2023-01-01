const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const request = require("request")

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/signup.html")
})

app.post("/", (req, res) => {
    const fName = req.body.fName
    const lName = req.body.lName
    const email = req.body.email
    console.log(fName);
})

app.listen(process.env.PORT || 3000, () => {
    console.log("Listening 3000");
})

