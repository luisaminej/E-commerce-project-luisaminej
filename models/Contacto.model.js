const mongoose          = require("mongoose")
const Schema            = mongoose.Schema








//SCHEMA

const contactoSchema        = new Schema({
    
    Nombre: String,
    Correo: String,
    Comentario: String

   
    


},

{    
    timestamps:true,
   
})

//MODELO

const Contacto = mongoose.model("Contacto", contactoSchema)

//EXPORTACIÓN

module.exports = Contacto