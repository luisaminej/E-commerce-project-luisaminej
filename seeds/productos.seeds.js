const mongoose = require("mongoose")
const Productos = require('../models/Productos.model')

require('dotenv').config()

const connectDB = require('../db/index')

connectDB()

const productos = [
  {
    _id: "61030b9263f9cd1668bb61e9",
    categoria: "6101e1c9c25ecc14bf7b57b1",
    nombre: "Computadora All in One Lenovo IdeaCentre 3 24IIL5",
    modelo: "F0FR005-CLD",
    image: "https://www.officedepot.com.mx/medias/100038735.jpg-1200ftw?context=bWFzdGVyfHJvb3R8Mzk3ODI4fGltYWdlL2pwZWd8aDcxL2hiZi8xMDA3NjczODE5MTM5MC8xMDAwMzg3MzUuanBnXzEyMDBmdHd8MDMyZjc5YmYwOWI2YjllYmVkZDhkNzlmZWY2NzUzNDVlNjY1YmY3ZTc2NWFkN2U4MjBiNjgwOTI3N2RlZjg2ZQ",
    medidas: "44.73 cm (An.), 54.10 cm (Al.), 18.5 cm (Pr.) / Pantalla 23.8 pulgadas",
    color:
      "Negro",
    capacidad: "Procesador Intel Core i7-1065G7, de décima generación / Memoria RAM 8 GB / Disco Duro 1 TB / Sistema operativo Windows 10 Home / Tarjeta gráfica Intel Iris Plus",
    conectividad: "1 puerto RJ45 / 1 HDMI / 1 USB 2.0 / 1 USB 2.0 / 1 USB 3.1 (en la parte posterior) / 1 USB 3.1 / 1 lector de tarjetas / 1 toma combinada para auriculares/micrófono (en la parte lateral) / Tecnología Bluetooth 5.0 / Conectividad WiFi 802.11ac (2x2)",
    multimedia: "Webcam frontal integrada de 720p HD / 2 altavoces integrados de 3W /  Pantalla con definición FHD, resolución 1920x1080p y tecnología IPS / Soporte tubular de mesa / Puerto de alimentación posterior",
    precio: "$19,499.25"

  },
  {
    _id:"61030b9263f9cd1668bb61ea",
    categoria: "6101e1c9c25ecc14bf7b57b1",
    nombre: "iMac Apple ",
    modelo: "MHK03E/A",
    image: "https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/mg/gm/1p/images/product-images/img_large/00019425215990l.jpg",
    medidas: "44.73 cm (An.), 54.10 cm (Al.), 18.5 cm (Pr.) / Pantalla 23.8 pulgadas",
    color: "Negro",
    capacidad: "Procesador Intel Core i7-1065G7, de décima generación / Memoria RAM 8 GB / Disco Duro 1 TB / Sistema operativo Windows 10 Home / Tarjeta gráfica Intel Iris Plus",
    conectividad: "1 puerto RJ45 / 1 HDMI / 1 USB 2.0 / 1 USB 2.0 / 1 USB 3.1 (en la parte posterior) / 1 USB 3.1 / 1 lector de tarjetas / 1 toma combinada para auriculares/micrófono (en la parte lateral) / Tecnología Bluetooth 5.0 / Conectividad WiFi 802.11ac (2x2)",
    multimedia: "Webcam frontal integrada de 720p HD / 2 altavoces integrados de 3W /  Pantalla con definición FHD, resolución 1920x1080p y tecnología IPS / Soporte tubular de mesa / Puerto de alimentación posterior",
    precio: "$29,999.25",
  },

  {
    _id:"61030b9263f9cd1668bb61eb",
    categoria: "61030b9263f9cd1668bb61eb",
    nombre: "Laptop Gamer Lenovo Legion Y540-15IRH",
    modelo: "81SX00V-3LM",
    image: "https://www.officedepot.com.mx/medias/100038743.jpg-1200ftw?context=bWFzdGVyfHJvb3R8ODUyNzU0fGltYWdlL2pwZWd8aGFhL2hmOC8xMDA5OTI2NzE3NDQzMC8xMDAwMzg3NDMuanBnXzEyMDBmdHd8ZjFhMDQ2ZTA1YTRjNzY0YWI0NzE2NGFiZDcyZGMyNTBhMWRkMjMzZjhhM2Y3MDU4OGMzMThjMDU0YjNkMWY5ZQ",
    medidas: "36 cm (An.), 26.7 cm (Pr.), 2.42-2.59 cm (Al.) / Pantalla 15.6 pulgadas",
    color: "Negro",
    capacidad: "Procesador Intel Core i7-9750HF (6C / 12T, 2.6 / 4.5GHz, 12MB, novena generación) / Memoria RAM 16 GB / Disco duro 1 TB / Sistema SSD de 128 GB / Sistema operativo Windows 10 Home / Tarjeta gráfica NVIDIA GeForce GTX 1660 Ti 6GB GDDR6",
    conectividad: "1 conector de alimentación / 1 Mini DisplayPort 1.4 / 1 Ethernet (RJ-45) / 1 USB 3.1 Gen 1 (siempre encendido) / 1 USB-C 3.1 Gen 1 (admite transferencia de datos y DisplayPort 1.2) / 2 USB 3.1 de 1a generación / 1 conector combinado para auriculares-micrófono de 3.5 mm / 1 HDMI 2.0 / Ranura de seguridad Kensington / Bluetooth 4.2 / WiFi 11ac, 2x2",
    multimedia: "Cámara frontal HD 720p / Micrófono incorporado / Micrófono de doble matriz / 2 altavoces estéreo Harman de 2W, con Dolby Atmos para juegos y audio en alta definición / Pantalla IPS con resolución Full HD de 1920 x 1080 pixeles antirreflejo / Teclado tamaño completo, con tecnología anti-ghosting 100% y retroiluminación blanca / Panel táctil de alta precisión / Sistema de refrigeración Legion Coldfront / Batería recargable de polímero de litio de 57 Wh (hasta 3.7 horas)",
    precio: "$40,999.00",

  },
  {
    _id:"61030b9263f9cd1668bb61ec",
    categoria: "6101e1c9c25ecc14bf7b57b4",
    nombre: "MacbookPro",
    modelo: "81SX00V-3LM",
    image: "https://www.officedepot.com.mx/medias/100029281.jpg-1200ftw?context=bWFzdGVyfHJvb3R8MTc1MjI3fGltYWdlL2pwZWd8aDBmL2hiYS8xMDA2NDIwNjI2NjM5OC8xMDAwMjkyODEuanBnXzEyMDBmdHd8ZWZmYzA1NmEyZmMxMGFmMTc3NWM4YzYyZDFiZWVjZmZlOGM0YjYyODliYmZjOTRkYzYxMDNkNTA2YTczNDcwNw",
    medidas: "36 cm (An.), 26.7 cm (Pr.), 2.42-2.59 cm (Al.) / Pantalla 15.6 pulgadas",
    color: "Negro",
    capacidad: "Procesador Intel Core i7-9750HF (6C / 12T, 2.6 / 4.5GHz, 12MB, novena generación) / Memoria RAM 16 GB / Disco duro 1 TB / Sistema SSD de 128 GB / Sistema operativo Windows 10 Home / Tarjeta gráfica NVIDIA GeForce GTX 1660 Ti 6GB GDDR6",
    conectividad: "1 conector de alimentación / 1 Mini DisplayPort 1.4 / 1 Ethernet (RJ-45) / 1 USB 3.1 Gen 1 (siempre encendido) / 1 USB-C 3.1 Gen 1 (admite transferencia de datos y DisplayPort 1.2) / 2 USB 3.1 de 1a generación / 1 conector combinado para auriculares-micrófono de 3.5 mm / 1 HDMI 2.0 / Ranura de seguridad Kensington / Bluetooth 4.2 / WiFi 11ac, 2x2",
    multimedia: "Cámara frontal HD 720p / Micrófono incorporado / Micrófono de doble matriz / 2 altavoces estéreo Harman de 2W, con Dolby Atmos para juegos y audio en alta definición / Pantalla IPS con resolución Full HD de 1920 x 1080 pixeles antirreflejo / Teclado tamaño completo, con tecnología anti-ghosting 100% y retroiluminación blanca / Panel táctil de alta precisión / Sistema de refrigeración Legion Coldfront / Batería recargable de polímero de litio de 57 Wh (hasta 3.7 horas)",
    preciolist: "$40,999.00",
    precio: "$35,659.00"
  },
  {
    _id:"61030b9263f9cd1668bb61ed",
    categoria: "6101e1c9c25ecc14bf7b57b7",
    nombre: "iPhone 11",
    modelo: "81SX00V-3LM",
    image: "https://www.telcel.com/content/dam/telcelcom/dispositivos/Apple/iPhone11/imagenes/morado/dual.jpg/jcr:content/renditions/cq5dam.web.250.470.jpeg",
    medidas: "150.9 x 75.7 x 8.3 mm/ Peso 194 grs.",
    color: "Black Pearl / Blanco / Gris ",
    capacidad: "64 GB, 128 GB, 256 GB / Memoria Interna: 64 GB, 128 GB y 256 GB / Procesador: Chip A13 Bionic / Sistema Operatico: iOS 13",
    conectividad: "NFC / Wi‑Fi / Bluetooth V 5.0",
    multimedia: "Cámara frontal: TrueDepth de 12 megapixeles / Cámara trasera: 12 + 12 megapixeles ",
    preciolista: "$40,999.00",
    precio: "$22,999.00"

  },
  {
    _id:"61030b9263f9cd1668bb61ee",
    categoria: "6101e1c9c25ecc14bf7b57b6",
    nombre: "Proyector BenQ",
    modelo: "MS550 / ASIN: B07DD13XL1",
    image: "https://www.ledvisual.com/_articulos/Articulo0029682.jpg",
    medidas: "29.6 x 22.1 x 12 cm/ Peso: 2.3 kg",
    color: "Black Pearl / Blanco / Gris ",
    capacidad: "64 GB, 128 GB, 256 GB / Memoria Interna: 64 GB, 128 GB y 256 GB / Procesador: Chip A13 Bionic / Sistema Operatico: iOS 13",
    conectividad: "HDMI / ‎DVD / Blu-Ray / PC / Laptop / Consola Videojuego / Qcast / HDTV",
    multimedia: "Resolución de la pantalla 800 X 600 / Relación de aspecto: 4:3 / Relación de contraste de la imagen: 20000:1 / Brillo de la imagen: 3600.0",
    preciolista: "$7,889.20",
    precio: "$4,659.00"

  },
  {
    _id:"61030b9263f9cd1668bb61ef",
    categoria: "6101e1c9c25ecc14bf7b57b6",
    nombre: "Proyector Acer",
    modelo: "X1126AH",
    image: "https://http2.mlstatic.com/D_NQ_NP_824205-MLA27932833008_082018-O.jpg",
    medidas: "29.6 x 22.1 x 12 cm/ Peso: 2.3 kg",
    color: "Black Pearl / Blanco / Gris ",
    capacidad: "64 GB, 128 GB, 256 GB / Memoria Interna: 64 GB, 128 GB y 256 GB / Procesador: Chip A13 Bionic / Sistema Operatico: iOS 13",
    conectividad: "HDMI / ‎DVD / Blu-Ray / PC / Laptop / Consola Videojuego / Qcast / HDTV",
    multimedia: "Resolución de la pantalla 800 X 600 / Relación de aspecto: 4:3 / Relación de contraste de la imagen: 20000:1 / Brillo de la imagen: 3600.0",
    preciolista: "$7,889.20",
    precio: "$4,659.00"
  },
  {
    _id:"61030b9263f9cd1668bb61f0",
    categoria: "6101e1c9c25ecc14bf7b57b7",
    nombre: "Samsung Galaxy S21",
    modelo: "81SX00V-3LM",
    image: "https://images-na.ssl-images-amazon.com/images/I/41U9E-omglL._AC_.jpg",
    medidas: "150.9 x 75.7 x 8.3 mm/ Peso 194 grs.",
    color: "Black Pearl / Blanco / Gris ",
    capacidad: "64 GB, 128 GB, 256 GB / Memoria Interna: 64 GB, 128 GB y 256 GB / Procesador: Chip A13 Bionic / Sistema Operatico: iOS 13",
    conectividad: "NFC / Wi‑Fi / Bluetooth V 5.0",
    multimedia: "Cámara frontal: TrueDepth de 12 megapixeles / Cámara trasera: 12 + 12 megapixeles ",
    preciolista: "$40,999.00",
    precio: "$31,659.00"
  },
  {
    _id:"61030b9263f9cd1668bb61f1",
    categoria: "6101e1c9c25ecc14bf7b57b5",
    nombre: "Monitor Gamer Dell SE2417HGX",
    modelo: "SE2417HGX",
    image: "https://www.officedepot.com.mx/medias/100030936.jpg-1200ftw?context=bWFzdGVyfHJvb3R8NTQ2MjkzfGltYWdlL2pwZWd8aDg1L2g0Mi8xMDA2NzQ5NTg3ODY4Ni8xMDAwMzA5MzYuanBnXzEyMDBmdHd8ZWQxZWUxMDU0MDA2MmQ3ZTQ5NGFmM2NmNmI2MDVlOWMyYTQzZDgyZTY4YTkzYTQ1YzhjNmFmMzc1MmY1MzZhYQ",
    medidas: "55.52 cm (An.), 42.25 cm (Al.), 17.99 cm (Pr.), con soporte",
    color: "Negro con detalles en plata",
    capacidad: "No incluye",
    conectividad: "Equipos de cómputo y dispositivos con interfaz HDMI y VGA",
    multimedia: "Pantalla‎ plana de 24  pulgadas / Panel LCD antirreflejo con retroiluminación LED / Recubrimiento de pantalla antirreflejo, 3H hardness / Frecuencia de actualización de VGA 60Hz, HDMI 75Hz / Brillo 300 cd/m2 / Respuesta de 5 ms (normal); 1 ms (extremo) / Definición FHD de 1920 X 1080p / 16.7 millones de colores / Relación de Aspecto 16:9 / Tecnología AMD FreeSync / Tecnología ComfortView de Dell / Gama de colores NTSC al 72% (CIE 1931) / Gama de colores al 84% NTSC (CIE 1976) / Sin mercurio, cristal sin arsénico / 2 HDMI 1.4 / 1 VGA / 1 Salida de audio / Bisel color negro / Base sólida / Inclinación ajustable",
    preciolista: "$4,999.00",
    precio: "$2,659.00"

  },
  {
    _id:"61030b9263f9cd1668bb61f2",
    categoria: "6101e1c9c25ecc14bf7b57b5",
    nombre: "Monitor Samsung",
    modelo: "LC24F390FHLXZX 24",
    image: "https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/mg/gm/1p/images/product-images/img_large/00880608823192l.jpg",
    medidas: "55.52 cm (An.), 42.25 cm (Al.), 17.99 cm (Pr.), con soporte",
    color: "Negro con detalles en plata",
    capacidad: "No incluye",
    conectividad: "Equipos de cómputo y dispositivos con interfaz HDMI y VGA",
    multimedia: "Pantalla‎ plana de 24  pulgadas / Panel LCD antirreflejo con retroiluminación LED / Recubrimiento de pantalla antirreflejo, 3H hardness / Frecuencia de actualización de VGA 60Hz, HDMI 75Hz / Brillo 300 cd/m2 / Respuesta de 5 ms (normal); 1 ms (extremo) / Definición FHD de 1920 X 1080p / 16.7 millones de colores / Relación de Aspecto 16:9 / Tecnología AMD FreeSync / Tecnología ComfortView de Dell / Gama de colores NTSC al 72% (CIE 1931) / Gama de colores al 84% NTSC (CIE 1976) / Sin mercurio, cristal sin arsénico / 2 HDMI 1.4 / 1 VGA / 1 Salida de audio / Bisel color negro / Base sólida / Inclinación ajustable",
    preciolista: "$4,999.00",
    precio: "$3,659.00"
  },
  {
    _id:"61030b9263f9cd1668bb61f3",
    categoria: "6101e1c9c25ecc14bf7b57b2",
    nombre: "Xtreme PC Gamer Geforce",
    modelo: "GT 1030",
    image: "https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/mg/gm/3pp/asr/1c1c3c7f-dcc4-4215-9aeb-684182a7cfc2.4ff5abb5efc42e2d1dc4db9830530742.png?odnHeight=2000&odnWidth=2000&odnBg=ffffff",
    medidas: "20cm x 44cm x 41cm / peso: 10 kg",
    color: "Negro",
    capacidad: "Procesador Intel Core i3-10100F / Memoria RAM 16 GB / Disco duro 2 TB / SSD 120GB / Sistema operativo: Windows 10 Trial / Tarjeta gráfica NVIDIA  GeForce GT 1030 GDDR5 2GB 384 CUDA Cores",
    conectividad: "1 conector de alimentación / 1 Mini DisplayPort 1.4 / 1 Ethernet (RJ-45) / 1 USB 3.1 Gen 1 (siempre encendido) / 1 USB-C 3.1 Gen 1 (admite transferencia de datos y DisplayPort 1.2) / 2 USB 3.1 de 1a generación / 1 conector combinado para auriculares-micrófono de 3.5 mm / 1 HDMI 2.0 / Ranura de seguridad Kensington / Bluetooth 4.2 / WiFi 11ac, 2x2",
    multimedia: "No incluye",
    preciolista: "$9,999.00",
    precio: "$35,659.00"

  },
  {
    _id:"61030b9263f9cd1668bb61f4",
    categoria: "6101e1c9c25ecc14bf7b57b2",
    nombre: "PC Gamer Geforce",
    modelo: "10700",
    image: "https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/mg/gm/3pp/asr/44b594af-fd6f-43e4-8842-dc464974ee7f.7de63fb6e66b46d1d69157ba83765e4b.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff",
    medidas: "20cm x 44cm x 41cm / peso: 10 kg",
    color: "Negro",
    capacidad: "Procesador Intel Core i3-10100F / Memoria RAM 16 GB / Disco duro 2 TB / SSD 120GB / Sistema operativo: Windows 10 Trial / Tarjeta gráfica NVIDIA  GeForce GT 1030 GDDR5 2GB 384 CUDA Cores",
    conectividad: "1 conector de alimentación / 1 Mini DisplayPort 1.4 / 1 Ethernet (RJ-45) / 1 USB 3.1 Gen 1 (siempre encendido) / 1 USB-C 3.1 Gen 1 (admite transferencia de datos y DisplayPort 1.2) / 2 USB 3.1 de 1a generación / 1 conector combinado para auriculares-micrófono de 3.5 mm / 1 HDMI 2.0 / Ranura de seguridad Kensington / Bluetooth 4.2 / WiFi 11ac, 2x2",
    multimedia: "No incluye",
    preciolista: "$6,999.00",
    precio: "$3,659.00"
  },
  {
    _id:"61030b9263f9cd1668bb61f5",
    categoria: "6101e1c9c25ecc14bf7b57b8",
    nombre: "iPad 8 Apple",
    modelo: "MYL92LZ/A",
    image: "https://www.officedepot.com.mx/medias/100000681.jpg-1200ftw?context=bWFzdGVyfHJvb3R8NDEyNzUzfGltYWdlL2pwZWd8aDZkL2hjZS85OTQ5Mjc0ODMyOTI2LmpwZ3w2ZmQxNzI5MTE2NDA4YjQyYzYyMjg0OGY1MDkxNTA4NjAwNmRlNTk1ZDhhNWUxYTIzODk1NWYxM2VjODZjOTBk",
    medidas: "17.4 cm (Pr.), 25 cm (An.), 0.7 cm (Al.) / Pantalla 10.2 pulgadas",
    color: "Gris",
    capacidad: "Sistema operativo iPadOS 14 / Chip A12 Bionic con arquitectura de 64 bits / Chip de inteligencia artificial Neural Engine / 32 GB de almacenamiento interno",
    conectividad: "Puerto USB-C / Conexión Wi Fi (802.11a/b/g/n/ac) / Bluetooth 4.2",
    multimedia: "Pantalla táctil Retina retroiluminada por LED / Resolución de 2160 x 1620 pixeles  / Cámara frontal 7 MP / Cámara posterior de 1.2 MP / Touch ID / Micrófonos internos / Sistema de altavoces estéreo / Batería de polímero de litio recargable integrada ",
    preciolista: "$9,999.00",
    precio: "$5,659.00"

  },
  {
    _id:"61030b9263f9cd1668bb61f6",
    categoria: "6101e1c9c25ecc14bf7b57b8",
    nombre: "Tablet Lenovo",
    modelo: "TB-X306F",
    image: "https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/mg/gm/1p/images/product-images/img_large/00019504252043-1l.jpg",
    medidas: "17.4 cm (Pr.), 25 cm (An.), 0.7 cm (Al.) / Pantalla 10.2 pulgadas",
    color: "Plateada",
    capacidad: "Sistema operativo iPadOS 14 / Chip A12 Bionic con arquitectura de 64 bits / Chip de inteligencia artificial Neural Engine / 32 GB de almacenamiento interno",
    conectividad: "Puerto USB-C / Conexión Wi Fi (802.11a/b/g/n/ac) / Bluetooth 4.2",
    multimedia: "Pantalla táctil Retina retroiluminada por LED / Resolución de 2160 x 1620 pixeles  / Cámara frontal 7 MP / Cámara posterior de 1.2 MP / Touch ID / Micrófonos internos / Sistema de altavoces estéreo / Batería de polímero de litio recargable integrada ",
    preciolista: "$5,999.00",
    precio: "$2,659.00"
  },
  {
    _id:"61030b9263f9cd1668bb61f7",
    categoria: "6101e1c9c25ecc14bf7b57b3",
    nombre: "Disco duro interno Seagate",
    modelo: "ST2000DM008 2 TB PC 3.5",
    image: "https://www.officedepot.com.mx/medias/100000681.jpg-1200ftw?context=bWFzdGVyfHJvb3R8NDEyNzUzfGltYWdlL2pwZWd8aDZkL2hjZS85OTQ5Mjc0ODMyOTI2LmpwZ3w2ZmQxNzI5MTE2NDA4YjQyYzYyMjg0OGY1MDkxNTA4NjAwNmRlNTk1ZDhhNWUxYTIzODk1NWYxM2VjODZjOTBk",
    medidas: "alt: 26,11 MM.1,028 pul ancho: 101,85 MM.4,01 pulg / Peso: 610 gr",
    color: "Gris",
    capacidad: "2 TB",
    conectividad: "Puerto USB-C / Conexión Wi Fi (802.11a/b/g/n/ac) / Bluetooth 4.2",
    multimedia: "No incluye",
    preciolista: "$1,200.10",
    precio: "$659.00"

  },
  {
    _id:"61030b9263f9cd1668bb61f8",
    categoria: "6101e1c9c25ecc14bf7b57b3",
    nombre: "Disco duro interno ",
    modelo: "ST2000DM008 2 TB PC 3.5",
    image: "https://www.officedepot.com.mx/medias/100000681.jpg-1200ftw?context=bWFzdGVyfHJvb3R8NDEyNzUzfGltYWdlL2pwZWd8aDZkL2hjZS85OTQ5Mjc0ODMyOTI2LmpwZ3w2ZmQxNzI5MTE2NDA4YjQyYzYyMjg0OGY1MDkxNTA4NjAwNmRlNTk1ZDhhNWUxYTIzODk1NWYxM2VjODZjOTBk",
    medidas: "alt: 26,11 MM.1,028 pul ancho: 101,85 MM.4,01 pulg / Peso: 610 gr",
    color: "Gris",
    capacidad: "2 TB",
    conectividad: "Puerto USB-C / Conexión Wi Fi (802.11a/b/g/n/ac) / Bluetooth 4.2",
    multimedia: "No incluye",
    preciolista: "$2,200.10",
    precio: "$1,659.00"
  },

]


Productos.create(productos)
  .then(() => {
    console.log("Productos creados")
    mongoose.connection.close()
  })
  .catch(e => console.log(e))