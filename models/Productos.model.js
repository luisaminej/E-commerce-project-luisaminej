const mongoose          = require("mongoose")
const Schema            = mongoose.Schema



//SCHEMA

const productosSchema        = new Schema({
    
    categoria: [{ type: Schema.Types.ObjectId, ref: "Categoria" }],
    nombre: String,
    modelo: String,
    image: String,
    medidas: String,
    color: String,
    capacidad: String,
    conectividad: String,
    multimedia: String,
    precio: String
    
    
   

},

{    
    timestamps:true,
   
})

//MODELO

const Productos = mongoose.model("Productos", productosSchema)

//EXPORTACIÓN

module.exports = Productos