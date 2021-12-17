const { Router } = require("express");
const clienteController = require("../controlles/clienteController");

const router = Router();

router.get("/obtener_clientes", clienteController.get_Clientes);
router.get("/obtener_cliente/:id", clienteController.get_Cliente);
router.post("/crear_cliente", clienteController.crear_Cliente);
router.patch("/actualizar_cliente/:id", clienteController.actualizar_Cliente);
router.delete("/borrar_cliente/:id", clienteController.borrar_Cliente);

module.exports = router;