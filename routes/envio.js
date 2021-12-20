const { Router } = require('express');
const envioController = require('../controlles/envioController');

const router = Router();

router.get('/obtener_envios', envioController.get_Envios);
router.get('/obtener_envio/:id', envioController.get_Envio);
// router.post('/crear_envio', envioController.crear_envio);
// router.patch('/actualizar_envio/:id', envioController.actualizar_envio);
// router.delete('/borrar_envio/:id', envioController.borrar_envio);

module.exports = router;
