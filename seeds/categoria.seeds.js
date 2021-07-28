const mongoose              = require("mongoose")
const Categoria             = require('../models/Categoria.model')


require('dotenv').config()

const connectDB     =require('../db/index')

connectDB()

const categoria = [
    {
      nombre: "All",
      image: "https://w7.pngwing.com/pngs/633/104/png-transparent-technological-innovation-system-technology-computer-icons-research-electronics-innovation-system.png",
      productos: ["60ff4327b962292c1925c80e"]
    },
    {
      nombre: "All in one",
      image: "https://w7.pngwing.com/pngs/146/264/png-transparent-computer-icons-laptop-computer-monitors-personal-computer-computer-monitor-electronics-computer-video-game.png",
      productos: ["60ff408ae1f44f2b428847ff"]
    },
    {
      nombre: "CPU'S",
      image: "https://i.pinimg.com/474x/ba/5e/e5/ba5ee5921dcadaff0a0ffd8b26f48611.jpg",
      productos:["60ff40ede9a6422b6c1b4a0b"]
    },
    {
      nombre: "Disco duro",
      image: "https://img2.freepng.es/20180723/hrp/kisspng-hard-drives-disk-partitioning-format-computer-soft-hard-disc-icon-5b55a3478f6926.4782153515323390155874.jpg",
      productos: ["60ff408ae1f44f2b42884806"]
    },
    {
      nombre: "Laptops",
      image: "https://w7.pngwing.com/pngs/282/902/png-transparent-laptop-computer-icons-web-browser-web-page-laptop-electronics-rectangle-computer.png",
      productos:["60ff408ae1f44f2b42884800"] 
    },
    {
      nombre: "PC's",
      image: "https://e7.pngegg.com/pngimages/182/181/png-clipart-laptop-computer-monitors-computer-icons-monitor-electronics-computer.png",
      productos: ["60ff408ae1f44f2b42884803"]
    },
    {
      nombre: "Proyectores",
      image: "https://w7.pngwing.com/pngs/745/204/png-transparent-computer-icons-multimedia-projectors-electronics-technological-sense-graphics-blue-electronics-computer.png",
      productos:["60ff40ede9a6422b6c1b4a09"]
    },
    {
      nombre: "Smartphones",
      image: "https://img2.freepng.es/20180703/fck/kisspng-smartphone-feature-phone-iphone-4s-computer-icons-5b3b7b346bc154.5582995015306248204414.jpg",
      productos:["60ff40ede9a6422b6c1b4a08"]
    },
    {
      nombre: "Tabletas",
      image: "data:image/png;base64,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",
      productos: ["60ff408ae1f44f2b42884805"]
    },
    
] 
    
    
    Categoria.create(categoria)
    .then(() => {
        console.log("Categorias creadas")
        mongoose.connection.close()
    })
    .catch(e => console.log(e))

    