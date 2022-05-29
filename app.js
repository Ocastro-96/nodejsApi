require("dotenv").config()
const express = require("express")
const cors = require("cors")
const dbConnect = require('./config/mongoose')
const app = express()

app.use(cors())
app.use(express.json())

const port = process.env.PORT || 3000

/**
 * Aqui invocamos las ruta
 */
//TODO localhost/api/_____
app.use("/api", require("./routes/index"))

app.listen(port, ()=>{
    console.log(`La app se esta escuchando por el puerto: http://localhost:${port}`)
})

dbConnect();