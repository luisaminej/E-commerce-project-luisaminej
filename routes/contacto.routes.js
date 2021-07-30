const router = require("express").Router()

const bcryptjs = require("bcryptjs")

const mongoose = require("mongoose")

const Contacto = require('./../models/Contacto.model')


router.get("/contacto", (req, res) => { 

    Contacto.find({})
        .then((encontrarContacto) => {
            console.log(encontrarContacto)
                res.render("contacto", {
                    contacto: encontrarContacto
                })
        }) 
        .catch(e => console.log(e))
})

router.get("/contacto", (req, res) => {
    
    const queries = req.query
                                      ///TIPO DE TRANSFERENCIA DE DATOS MEDIANTE URL. EL OTRO ES CON PARAMS
    res.render("contacto", {
        contacto: queries
    })
})


// SERVIDOR
// sirve para enviar datos para los botones y formularios

router.post("/contacto", (req, res) => {
   
    const valorFormulario = req.body
    

    res.redirect("/contacto")
    console.log("Funciona", valorFormulario)
    
})

module.exports = router

