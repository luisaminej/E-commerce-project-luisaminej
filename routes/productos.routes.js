const router = require("express").Router()

const bcryptjs = require("bcryptjs")

const mongoose = require("mongoose")

const Productos = require('../models/Productos.model')


router.get("categoria/:categoria/productos", (req, res) => { 

    Productos.find({})
        .then((encontrarProductos) => {
            console.log(encontrarProductos)
                res.render("productos", {
                    productos: encontrarProductos
                })
        }) 
        .catch(e => console.log(e))
})

module.exports = router