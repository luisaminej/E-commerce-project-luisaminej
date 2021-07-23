# Proyecto 2

## Objetivo principal

- Página a realizar rebranding: freebuy.com.mx
- Desarrollo de comercio electrónico. 
- Venta de equipo

## Características

- Utilizar un catálogo de productos real (cuidar datos sensibles)


## Modelos de Base de Datos

- Usuario
- Categoria
- Producto

<!-- 
- Carrito
- Pago 
-->


## Ruteo

### Métodos GET

Ruta  | Descripción
------------- | -------------
/  | Home
/registro  | 
/iniciarsesion  | 
/cerrarsesion |
/miscompras | Área privada del usuario para ver las compras realizadas
/carrito | Área privada del carrito de compras del usuario
/categorias | Aparecen las diferentes categorías de productos
/categorias/:categoria | Ver la categoría con sus productos
/categorias/:categoria/:producto | Ver el producto individual
/contacto | Contactar a una persona
/busqueda | Página de resultados de la búsqueda POST

### Métodos POST

Ruta  | Descripción
------------- | -------------
/buscar  | Petición para búsqueda de un producto


