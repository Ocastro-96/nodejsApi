const express = require("express");
const { route } = require("express/lib/application");
const customHeader = require("../middleware/customHeaders")
const {validatorCreateItem} = require("../validators/track");
const { getItems, getItem, createItem } = require("../controllers/track");
const router = express.Router();

//vamos a declarar nuestras ruta para el modelo tracks comprendiendo los metodo GET, POST, DELETE, PUT

router.get("/", getItems);
router.post("/",validatorCreateItem, customHeader, createItem);
//router.get("/:id", getItem);

module.exports = router