const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const app = express()
const Routes = require("./routes/route.js")


dotenv.config()

const PORT = process.env.PORT || 5000
const MONGO_URL = process.env.MONGO_URL

if(!MONGO_URL) {
    console.error("deu ruim")
    process.exit(1)
}

app.use(express.json({ limit: '50mb' }))
app.use(cors())

mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(console.log("Conectado ao MongoDB."))
    .catch((err) => console.log("Erro ao conectar ao MongoDB", err))


app.use('/', Routes);

app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`)
})

//user: breno
//password: JYgVBehRtgQwJI9E
//mongodb+srv://breno:JYgVBehRtgQwJI9E@cluster0.wwim6og.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0