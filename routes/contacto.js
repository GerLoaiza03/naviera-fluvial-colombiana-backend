const { Router } = require("express");
const contactoController = require("../controlles/contactoController");

const router = Router();

router.get("/obtener_contactos", contactoController.get_Contactos);
router.get("/obtener_contacto/:id", contactoController.get_Contacto);
router.post("/crear_contacto", contactoController.crear_Contacto);
router.patch("/actualizar_contacto/:id", contactoController.actualizar_Contacto);
router.delete("/borrar_contacto/:id", contactoController.borrar_Contacto);

module.exports = router;