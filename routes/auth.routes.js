const router = require("express").Router()

const bcryptjs = require("bcryptjs")

const mongoose = require("mongoose")

const Usuario = require('./../models/Usuario.model')

const { registrado, desconectado } = require('./../middleware/routh-guard')

//GET - Mostrar el registro

router.get("/registro", desconectado, (req, res) => {
    res.render("auth/registro")
})
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
                    msj: "Usa un correo válido"
                })
            } else if (e.code === 11000) {
                res.status(500).render("auth/registro", {
                    msj: "El usuario y el correo ya existen. Intenta uno nuevo."
                })
            }
        })
})

//GET Perfil del usuario actual registrado

//SI ESTOY LOGGEADO, PUEDO ENTRAR  A USERPROFILE
//SI NO ESTOY LOGGEADO, ENVÍAME A LA PÁGINA LOGIN

router.get('/perfilusuario', registrado, (req, res) => {
    res.render("usuario/perfil-usuario", { usuarioActual: req.session.usuarioActual })
})

//GET - Mostrar el formulario login

router.get("/acceso", (req, res) => {
    res.render("auth/acceso")
})

// POST - PROCESO DE AUTENTICACIÓN
// VERIFICA QUE EL USUARIO QUE ESTÁ PASANDO SU EMAIL Y CONTRASEÑA ES REALMENTE EL MISMO QUE SE REGISTRÓ

router.post("/acceso", (req, res) => {

    console.log(req.session)

    const { correo, password } = req.body


    // VALIDAR EMAIL Y CONTRASEÑA

    if (!correo || !password) {
        return res.render("auth/acceso", {
            msj: "Por favor ingresa correo y contraseña."
        })
    }
   
    Usuario.findOne({ correo })
    .then((usuarioEncontrado) => {

        

    // 1. EL USUARIO NO EXISTE EN BASE DE DATOS
    if (!usuarioEncontrado) {
    return res.render("auth/acceso", {
        msj: "El correo no fue encontrado"
    })
}
const autenticacionVerificada = bcryptjs.compareSync(password, usuarioEncontrado.passwordHash)
//2. SI EL USUARIO SE EQUIVOCÓ EN LA CONTRASEÑA
if (!autenticacionVerificada) {
    return res.render("auth/acceso", {
        msj: "La contraseña es incorrecta"
    })
}

// 3. SI EL USUARIO COINCIDE LA CONTRASEÑA CON LA BASE DE DATOS

    //vamos a crear en nuestro objeto SESSION una propiedad nueva que se llame usuarioActual
    
    req.session.usuarioActual = usuarioEncontrado

    console.log("sesión actualidad", req.session)
    return res.redirect("/perfilusuario")


   
  })
.catch((e) => console.log(e))
})

//POST - CERRAR SESIÓN

router.get('/salir', (req, res) => {
    req.session.destroy(e => {
      if(e){
        console.log(e)
      }
      res.redirect("/")
    })
  
  })

  


module.exports = router