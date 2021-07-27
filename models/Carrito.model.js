const mongoose          = require("mongoose")
const Schema            = mongoose.Schema








//SCHEMA

const carritoSchema        = new Schema({
    
    Texto: String,
   
    


},

{    
    timestamps:true,
   
})

//MODELO

const Carrito = mongoose.model("Carrito", carritoSchema)

//EXPORTACIÓN

module.exports = Carrito