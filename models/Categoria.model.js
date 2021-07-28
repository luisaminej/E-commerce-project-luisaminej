const mongoose          = require("mongoose")
const Schema            = mongoose.Schema








//SCHEMA

const categoriaSchema        = new Schema({
    
    nombre: String,
    image: String,
    productos: Array,
    


},

{    
    timestamps:true,
   
})

//MODELO

const Categoria = mongoose.model("Categoria", categoriaSchema)

//EXPORTACIÓN

module.exports = Categoria