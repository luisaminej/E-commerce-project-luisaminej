const router = require("express").Router()

const bcryptjs = require("bcryptjs")

const mongoose = require("mongoose")

const Productos = require('../models/Productos.model')

const Categoria = require('../models/Categoria.model')





router.get("/categoria/:categoriaId/:productoId", (req, res) => { 

    const { categoriaId, productoId } = req.params

    Categoria.findById(categoriaId)
        .then((categoriaEncontrada) => {
            
            Productos.findById(productoId)
                .populate("categoria")
                .then((productoEncontrado) => {

                    res.render("productos", {
                        productos: productoEncontrado

                    })
                }) 

        })
        .catch(e => {
            console.log(e)

            return res.render("error")

        })
})



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

router.get("/categoria/:categoriaId", (req, res) => {
    ///obtener id . findbyid
    
    const { categoriaId } = req.params

    Categoria.findById(categoriaId)
        .then(categoriaEncontrada => {
            res.render("categprod", {
                categoria: categoriaEncontrada,
                idCategoria: categoriaEncontrada._id   
            })

        }) 

    })



    


module.exports = router
