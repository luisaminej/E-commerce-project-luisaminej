const router = require("express").Router()

const bcryptjs = require("bcryptjs")

const mongoose = require("mongoose")

const Usuario = require('./../models/Usuario.model')



// GET - Mostrar el registro
// router.get("/registro", isLoggedOut, (req, res) => {
//     res.render("auth/registro")
// })
// POST - Procesar los datos
router.post("/registro", (req, res) => {

    // EXTRACCIÓN DE VALORES A UNA VARIABLE
    const { usuario, correo, password } = req.body
    // VALIDAR QUE NO LLEGUEN DATOS VACÍOS
    if (!usuario || !correo || !password) {
        return res.render('auth/registro', {
            msj: "Todos los campos son obligatorios"
        })
    }
    // VERIFICAR QUE EL PASSWORD ES FUERTE (TIENE UNA COMBINACIÓN DÍFICIL DE LEER)
    const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    // Si el password no cumple con las expectativas del regex
    if (!regex.test(password)) {
        return res.status(500).render("auth/registro", {
            msj: "El password debe tener 6 caracteres mínimo y debe contener al menos un número, una minúscula y una mayúscula."
        })
    }
    // ENCRIPTACIÓN
    bcryptjs
        .genSalt(10)
        .then(salt => bcryptjs.hash(password, salt))
        .then(hashedPassword => {
            return Usuario.create({
                usuario,
                correo,
                passwordHash: hashedPassword
            })
        })
        .then(usuarioCreado => {
            console.log("El usuario que creamos fue:", usuarioCreado)
            res.redirect('/perfilusuario')
        })
        .catch(e => {
            if (e instanceof mongoose.Error.ValidationError) {
                res.status(500).render("auth/registro", {
                    msj: "Usa un email válido"
                })
            } else if (e.code === 11000) {
                res.status(500).render("auth/registro", {
                    msj: "El usuario y el correo ya existen. Intenta uno nuevo."
                })
            }
        })
})



module.exports = router