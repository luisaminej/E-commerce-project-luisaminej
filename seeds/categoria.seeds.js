const mongoose              = require("mongoose")
const Categoria             = require('../models/Categoria.model')


require('dotenv').config()

const connectDB = require('../db/index')

connectDB()

const categoria = [
    
    {
      nombre: "All in one",
      image: "https://www.novicompu.com/5562-large_default/imac-core-i5-quad-core-8gb-1tb-22-pulg-led-ips-iris-pro-5200.jpg",
      productos: ["61030b9263f9cd1668bb61e9","61030b9263f9cd1668bb61ea"]
    },
    {
      nombre: "CPU'S",
      image: "https://resources.claroshop.com/medios-plazavip/mkt/5f35d3dbb109f_dell-optiplex-7070-9na-generacion-de-procesadores-intel-core-i5-i5-9500-8-gb-ddr4-sdram-256-ssd-negro-sff-pcjpg.jpg",
      productos:["61030b9263f9cd1668bb61f3","61030b9263f9cd1668bb61f4"]
    },
    {
      nombre: "Disco duro",
      image: "https://www.compulago.net/wp-content/uploads/erp/productos/110217082/1542942484440.jpg",
      productos: ["61030b9263f9cd1668bb61f7","61030b9263f9cd1668bb61f8"]
    },
    {
      nombre: "Laptops",
      image: "https://consumer-img.huawei.com/content/dam/huawei-cbg-site/latam/mx/mkt/plp/laptops/02list_01-v1.jpg",
      productos:["61030b9263f9cd1668bb61eb","61030b9263f9cd1668bb61ec"] 
    },
    {
      nombre: "Monitores",
      image: "https://www.muycomputer.com/wp-content/uploads/2017/03/nuevo-monitor-4.jpg",
      productos: ["61030b9263f9cd1668bb61f1","61030b9263f9cd1668bb61f2"]
    },
    {
      nombre: "Proyectores",
      image: "https://media.digitalife.com.mx/products/25503/609e5b1c26493.webp",
      productos:["61030b9263f9cd1668bb61ee","61030b9263f9cd1668bb61ef"]
    },
    {
      nombre: "Smartphones",
      image: "https://dicomania.com/wp-content/uploads/2019/09/iphone-pro.jpg",
      productos:["61030b9263f9cd1668bb61ed","61030b9263f9cd1668bb61f0"]
    },
    {
      nombre: "Tabletas",
      image: "https://www.enter.co/wp-content/uploads/2015/12/Comprar-una-tableta-barata.jpg",
      productos: ["61030b9263f9cd1668bb61f4","61030b9263f9cd1668bb61f6"]
    },
    
] 
    
    
Categoria.create(categoria)
  .then(() => {
        console.log("Categorias creadas")
        mongoose.connection.close()
    })
  .catch(e => console.log(e))
