const express = require('express')

const app = express()
const port = process.env.PORT || 4000


// milddlewares
app.use(express.json())

//import rutas 
const productostiendaRouter = require("./routes/productostienda")
app.use("/Productostienda", productostiendaRouter )


// rutas



app. listen(port, ()=>{
    console.log('Puerto Escuchando en el puerto ${port}')
})