const router = require("express").Router()

const bcryptjs = require("bcryptjs")

const mongoose = require("mongoose")

const Nosotros = require('./../models/Nosotros.model')

router.get("/nosotros", (req, res) => { 

    Nosotros.find({})
        .then((encontrarNosotros) => {
            console.log(encontrarNosotros)
                res.render("nosotros", {
                    nosotros: encontrarNosotros
                })
        }) 
        .catch(e => console.log(e))
})



module.exports = router