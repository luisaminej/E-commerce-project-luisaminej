const router = require("express").Router()

const bcryptjs = require("bcryptjs")

const mongoose = require("mongoose")

const Ayuda = require('./../models/Ayuda.model')

router.get("/ayuda", (req, res) => { 

    Ayuda.find({})
        .then((encontrarAyuda) => {
            console.log(encontrarAyuda)
                res.render("ayuda", {
                    ayuda: encontrarAyuda
                })
        }) 
        .catch(e => console.log(e))
})

module.exports = router