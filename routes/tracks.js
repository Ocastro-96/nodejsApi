const express = require("express");
const { route } = require("express/lib/application");
const {validatorCreateItem, validatorGetItem} = require("../validators/track")
const customHeader = require("../middleware/customHeader")
const { getItems, getItem, createItem, updateItem, deleteItem } = require("../controllers/track");
const router = express.Router();

//vamos a declarar nuestras ruta para el modelo tracks comprendiendo los metodo GET, POST, DELETE, PUT
/**
 * lista todos los items de la tabla
 */
router.get("/", getItems);
/**
 * listar un SOLO Item
 */
router.get("/:id", validatorGetItem, getItem);
/**
 * crear un reguistro
 */
router.post("/",validatorCreateItem, createItem);

/**
 * Update de los registros
 */
router.put("/:id",validatorGetItem, validatorCreateItem, updateItem);
/**
 * eliminar item
 */
router.delete("/:id",validatorGetItem, deleteItem);

module.exports = router