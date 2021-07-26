/*
*  /signup - GET - isLoggedOut
* /signup -POST -isloggeOut
*  /login - GET - isLoggedOut
* /login -POST -isloggeOut
* /logout -POST -isloggeIn
* /userprofile -GET - isloggedIn
*/  


const registrado = (req, res, next) => {
    if(!req.session.usuarioActual) {
        return res.redirect("/acceso")
    }

    next()
}

const desconectado = (req, res, next) => {
    if(req.session.usuarioActual){   //si ya está loggeado que no entre a signup
        return res.redirect("/")
    }

    next()
}

module.exports = {
    registrado,
    desconectado
}