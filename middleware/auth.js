//Auth tiene una única funciń para pasarlo como middleware en las rutas

const tokens=require("./tokens/tokens")

function validateUser(req, res, next) {
    const token = req.cookies.token; //esto toma el contenido de la cookie almacenada (que en este caso es el token de verificación)
    const payload  = tokens.validateToken(token); //de argumento se pasa un token, devuelve el payload
    req.user = payload; // asigno el payload a req.user para poder usarlo luego en las rutas
    if (payload) return next();
    else res.sendStatus(401); // Unauthorized
  }

module.exports=validateUser