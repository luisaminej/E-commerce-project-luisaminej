const mongoose          = require("mongoose")
const Schema            = mongoose.Schema



//SCHEMA

const productoSchema        = new Schema({
    nombre: String,
    modelo: String,
    medidas: String,
    color: String,
    capacidad: String,
    conectividad: String,
    multimedia: String,
   

},

{    
    timestamps:true,
   
})

//MODELO

const Producto = mongoose.model("Producto", productoSchema)

//EXPORTACIÓN

module.exports = Producto