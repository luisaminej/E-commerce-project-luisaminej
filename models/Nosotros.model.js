const mongoose          = require("mongoose")
const Schema            = mongoose.Schema








//SCHEMA

const nosotrosSchema        = new Schema({
    
    pregunta1: String,
    pregunta2: String,
    pregunta3: String
    


},

{    
    timestamps:true,
   
})

//MODELO

const Nosotros = mongoose.model("Nosotros", nosotrosSchema)

//EXPORTACIÓN

module.exports = Nosotros