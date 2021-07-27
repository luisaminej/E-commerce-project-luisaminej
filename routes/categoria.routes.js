const router = require("express").Router()

const bcryptjs = require("bcryptjs")

const mongoose = require("mongoose")

const Categoria = require('./../models/Categoria.model')

const Productos = require('./../models/Productos.model')



//Se crea la ruta  para ver las categorias
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
//Crear la ruta para la categoría con sus productos

router.get("/categoria/:categoria", (req, res) => {
    

    Productos.find()
        .then(encontrarProductos => {
            console.log(`Encontrar categoria:`, encontrarProductos)
            res.render("categprod", {
                productos: encontrarProductos
            })

        }) 

    })


module.exports = router