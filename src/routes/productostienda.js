const express = require('express')

const client = require("./utils/connectdb/conn")
const {ObjectId} = require("mongodb")

const productostienda = express.Router()

//------------------------------consulta find-----------------------------------------------------------------  
//------------------------------consulta find-----------------------------------------------------------------  
productostienda.get("/", async(req, res)=>{
    try {
        await client.connect()
        const results = await client.db("Tienda-SOFF").collection("ProductosTienda").find({}).toArray() 
        if(Array.isArray(results) >= 1){
            res.status(200).json({
                status:200,
                amount_results: results.length,
                data: results
            })
        }else{
            res.status(404).json({
                status: 404,
                message: "productos not found"

            })
        }
    } finally {

    }
})





//------------------------------consulta findOne---------------------------------------------------------------  
//------------------------------consulta findOne---------------------------------------------------------------   

productostienda.get("/:id", async(req, res)=>{
    let id=req.params.id
    try {
        await client.connect()
        const result = await client.db("Tienda-SOFF").collection("ProductosTienda").findOne({_id: new ObjectId(id)})
        if(result){
            res.status(200).json({
                status:200,
                amount_result: result.length,
                data: result
            })
        }else{
            res.status(404).json({
                status: 404,
                message: "producto not found"

            })
        }
    } finally{
    }
})


//-------------------------------- insert one (crear)------------------------------------------------------------------------ 
//-------------------------------- insert one (crear)------------------------------------------------------------------------ 
//-------------------------------- insert one (crear)------------------------------------------------------------------------ 

// 
productostienda.post("/", async(req, res)=>{
    const body = req.body
    try {
        await client.connect()
        const result = await client.db("Tienda-SOFF").collection("ProductosTienda").insertOne(body)
        if(result){
            res.status(201).json({
                status: 200,
                message: "Producto create ", 
                data: result
            })
        }else{
           res.status(400).json({
            status: 400,
            message: "An error has occurred while registering the productos"
           })

           }
        }finally{

        }
        })
//-------------------------------- insertmany (crear)------------------------------------------------------------------------ 
//-------------------------------- insertmany (crear)------------------------------------------------------------------------ 
//-------------------------------- insertmany (crear)------------------------------------------------------------------------ 

productostienda.post("/create_productos", async(req, res)=>{
        const body = req.body
        try {
                await client.connect()
                const result = await client.db("Tienda-SOFF").collection("ProductosTienda").insertMany(body)
                if(result){
                        res.status(201).json({
                                status: 200,
                message: "Productos create ", 
                data: result
            })
        }else{
               res.status(400).json({
                    status: 400,
                    message: "An error has occurred while registering the productos"
                   })
        
                   }
                }finally{
            
                    }
                    })
            
            
            
            
//-------------------------------- updateOne------------------------------------------------------------------------ 
//-------------------------------- updateOne------------------------------------------------------------------------ 
//-------------------------------- updateOne------------------------------------------------------------------------ 
//-------------------------------- updateOne------------------------------------------------------------------------ 
productostienda.patch("/:id", async(req, res)=>{
    const body = req.body
    let id=req.params.id
    try {
        await client.connect()
        const result = await client.db("Tienda-SOFF").collection("ProductosTienda").updateOne({_id: new ObjectId(id)},{$set:body})
        if(result){
            res.status(201).json({
                status: 200,
                message: "Producto update ", 
                data: result
            })
        }else{
            res.status(400).json({
                status: 400,
                message: "productos no update"
            })
            
        }
    }finally{
        
    }
})            
//-------------------------------- updateMany------------------------------------------------------------------------ 
//-------------------------------- updateMany------------------------------------------------------------------------ 
//-------------------------------- updateMany------------------------------------------------------------------------ 

productostienda.put("/update_many", async(req, res)=>{
    const body = req.body
    let id=req.params.id
    try {
        await client.connect()
        const result = await client.db("Tienda-SOFF").collection("ProductosTienda").updateMany({nombre:/J/},{$set:body})
        if(result){
            res.status(201).json({
                status: 200,
                message: "Producto updateMany ", 
                data: result
            })
        }else{
            res.status(400).json({
                status: 400,
                message: "productos no updateMany"
            })
            
        }
    }finally{
        
    }
})               
//------------------------------------------upsert----------------------------------------------------------------------- 
//------------------------------------------upsert----------------------------------------------------------------------- 
productostienda.put("/update_many/upsert", async(req, res)=>{
    const body = req.body
    let id=req.params.id
    try {
        await client.connect()
        const result = await client.db("Tienda-SOFF").collection("ProductosTienda").updateMany({nombre:/J/},{$set:body},{upsert:true})
        if(result){
            res.status(201).json({
                status: 200,
                message: "Producto updateMany ", 
                data: result
            })
        }else{
            res.status(400).json({
                status: 400,
                message: "productos no updateMany"
            })
            
        }
    }finally{
        
    }
})  



//-------------------------------- deleteOne------------------------------------------------------------------------ 
//-------------------------------- deleteOne------------------------------------------------------------------------ 
//-------------------------------- deleteOne------------------------------------------------------------------------ 
//-------------------------------- deleteOne------------------------------------------------------------------------ 
productostienda.delete("/:id", async(req, res)=>{
    let id=req.params.id
    try {
        await client.connect()
        const result = await client.db("Tienda-SOFF").collection("ProductosTienda").deleteOne({_id: new ObjectId(id)})
        if(result){
            res.status(204).json({
                status: 204,
                message: "delete producto ", 
            })
        }else{
            res.status(404).json({
                status: 404,
                message: "productos no found"
            })
            
        }
    }finally{
        
    }
})    

//-------------------------------- deleteMany------------------------------------------------------------------------ 
//-------------------------------- deleteMany------------------------------------------------------------------------ 
//-------------------------------- deleteMany------------------------------------------------------------------------ 
//-------------------------------- deleteMany------------------------------------------------------------------------ 


productostienda.delete("/delete_many", async(req, res)=>{
    try {
        await client.connect()
        const result = await client.db("Tienda-SOFF").collection("ProductosTienda").deleteMany({nombre:/E/})
        if(result){
            res.status(201).json({
                status: 200,
                message: "Productos updateMany ", 
            })
        }else{
            res.status(400).json({
                status: 400,
                message: "productos no updateMany"
            })
            
        }
    }finally{
        
    }
})  





module.exports = productostienda