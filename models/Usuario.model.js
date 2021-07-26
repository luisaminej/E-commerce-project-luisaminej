const { Schema, model } = require('mongoose');

const usuarioSchema = new Schema(
  {
    usuario: {
      type: String,
      trim: true,
      required: [true, 'El nombre de usuario es requerido.'],
      unique: true
    },
    correo: {
      type: String,
      required: [true, 'El correo es requerido.'],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Usa un email válido"],
    },
    passwordHash: {
      type: String,
      required: [true, "La contraseña es requerida"]
    }
    
  },
  {
    timestamps: true
  }
);

module.exports = model('Usuario', usuarioSchema);
