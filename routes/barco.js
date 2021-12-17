const { Router } = require("express");
const barcoController = require("../controlles/barcoController");

const router = Router();

router.get('/obtener_barcos', barcoController.get_Barcos);
router.get("/obtener_barco/:id", barcoController.get_Barco);
router.post("/crear_barco", barcoController.crear_Barco);
router.patch("/actualizar_barco/:id", barcoController.actualizar_Barco);
router.delete("/borrar_barco/:id", barcoController.borrar_Barco);

module.exports = router;