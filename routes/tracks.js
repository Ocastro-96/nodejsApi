const express = require("express");
const { route } = require("express/lib/application");
const {validatorCreateItem} = require("../validators/tracks")
const customHeader = require("../middleware/customHeader")
const { getItems, createItem } = require("../controllers/track");
const router = express.Router();

//vamos a declarar nuestras ruta para el modelo tracks comprendiendo los metodo GET, POST, DELETE, PUT

router.get("/", getItems);
router.post("/",validatorCreateItem, customHeader, createItem)

module.exports = router