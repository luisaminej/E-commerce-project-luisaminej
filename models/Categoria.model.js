const mongoose          = require("mongoose")
const Schema            = mongoose.Schema



//SCHEMA

const categoriaSchema        = new Schema({
    celulares: String,
    laptops: String,
    allinone: String,
    pcs: String,
    cpus: String,
    proyectores: String,
    hardware: String,
    impresoras: String,
    workstation: String,
    monitores: String,
    tabletas: String,
    discoduro: String,


},

{    
    timestamps:true,
   
})

//MODELO

const Categoria = mongoose.model("Categoria", categoriaSchema)

//EXPORTACIÓN

module.exports = Categoria