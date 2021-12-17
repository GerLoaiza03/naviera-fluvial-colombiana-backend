const { Router } = require("express");
const rutaController = require("../controlles/rutaController");

const router = Router();

router.get('/obtener_rutas', rutaController.get_Rutas);
router.get("/obtener_ruta/:id", rutaController.get_Ruta);
router.post("/crear_ruta", rutaController.crear_Ruta);
router.patch("/actualizar_ruta/:id", rutaController.actualizar_Ruta);
router.delete("/borrar_ruta/:id", rutaController.borrar_Ruta);

module.exports = router;