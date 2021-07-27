const mongoose          = require("mongoose")
const Schema            = mongoose.Schema








//SCHEMA

const miscomprasSchema        = new Schema({
    
    Texto: String,
   
    


},

{    
    timestamps:true,
   
})

//MODELO

const Miscompras = mongoose.model("Miscompras", miscomprasSchema)

//EXPORTACIÓN

module.exports = Miscompras