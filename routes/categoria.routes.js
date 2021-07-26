const router = require("express").Router()

const bcryptjs = require("bcryptjs")

const mongoose = require("mongoose")

const Categoria = require('./../models/Categoria.model')


router.get("/categoria", (req, res) => { 

    Categoria.find({})
        .then((encontrarCategoria) => {
            console.log(encontrarCategoria)
                res.render("categoria", {
                    categoria: encontrarCategoria
                })
        }) 
        .catch(e => console.log(e))
})

module.exports = router