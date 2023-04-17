const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
router.get("/dogs",(request,response)=>{
    response.send("listenig port 3001")
})

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
