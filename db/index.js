const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/E-commerce-project-luisaminej';

const connectDB = async () => {
  try {
    await mongoose
    .connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    }) 
    console.log("Conectado a la base")
  } 
   catch (e) {
     console.log(e)
   }
}

  

module.exports=connectDB