const router = require("express").Router()

const bcryptjs = require("bcryptjs")

const mongoose = require("mongoose")

const Miscompras = require('./../models/Miscompras.model')



    router.get("/miscompras", (req, res) => { 

        Miscompras.find({})
            .then((encontrarMisCompras) => {
                console.log(encontrarMisCompras)
                    res.render("mis-compras", {
                        miscompras: encontrarMisCompras
                    })
            }) 
            .catch(e => console.log(e))
    })
    

module.exports = router