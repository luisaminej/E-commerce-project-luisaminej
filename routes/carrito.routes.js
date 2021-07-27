const router = require("express").Router()

const bcryptjs = require("bcryptjs")

const mongoose = require("mongoose")

const Carrito = require('./../models/Carrito.model')

router.get("/carrito", (req, res) => { 

    Carrito.find({})
        .then((encontrarCarrito) => {
            console.log(encontrarCarrito)
                res.render("carrito", {
                    carrito: encontrarCarrito
                })
        }) 
        .catch(e => console.log(e))
})

module.exports = router