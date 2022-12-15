const express = require('express')
const { default: mongoose } = require('mongoose')
const route = require("./route/route")
const app = express()

app.use(express.json())


mongoose.connect("mongodb+srv://Raunak22012001:8329059512%40Ujwal@cluster0.tagnbhk.mongodb.net/student_login?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDb is connected on 27017"))
    .catch(err => console.log(err))


app.use("/", route)


app.listen(3000, () => {
    console.log("Express app running on port " + (3000))
})
