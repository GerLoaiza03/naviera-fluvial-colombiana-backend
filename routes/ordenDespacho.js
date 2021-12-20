const { Router } = require('express');
const ordenController = require('../controlles/ordenController');

const router = Router();

router.get('/obtener_ordenes', ordenController.get_Ordenes);
router.get('/obtener_ordenes/:id', ordenController.get_Orden);
router.post('/crear_orden', ordenController.crear_Orden);
router.patch('/actualizar_orden/:id', ordenController.actualizar_Orden);
router.delete('/borrar_orden/:id', ordenController.borrar_Orden);

module.exports = router;
