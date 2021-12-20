const { Router } = require('express');
const userController = require('../controlles/userController');

const router = Router();

router.get('/obtener_users', userController.get_Users);
router.get('/obtener_user/:id', userController.get_User);
// router.post('/crear_envio', envioController.crear_envio);
// router.patch('/actualizar_envio/:id', envioController.actualizar_envio);
// router.delete('/borrar_envio/:id', envioController.borrar_envio);

module.exports = router;
