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

module.exports = router