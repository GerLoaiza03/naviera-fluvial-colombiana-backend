const { Router } = require("express");
const puertoController = require("../controlles/puertoController");

const router = Router();

router.get('/obtener_puertos', puertoController.get_Puertos);
router.get("/obtener_puerto/:id", puertoController.get_Puerto);
router.post("/crear_puerto", puertoController.crear_Puerto);
router.patch("/actualizar_puerto/:id", puertoController.actualizar_Puerto);
router.delete("/borrar_puerto/:id", puertoController.borrar_Puerto);

module.exports = router;