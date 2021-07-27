const mongoose          = require("mongoose")
const Schema            = mongoose.Schema








//SCHEMA

const ayudaSchema        = new Schema({
    
    pregunta1: String,
    pregunta2: String,
    pregunta3: String
    


},

{    
    timestamps:true,
   
})

//MODELO

const Ayuda = mongoose.model("Ayuda", ayudaSchema)

//EXPORTACIÓN

module.exports = Ayuda