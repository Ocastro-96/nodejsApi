const express = require("express");
const { route } = require("express/lib/application");
<<<<<<< HEAD
const customHeader = require("../middleware/customHeaders")
const {validatorCreateItem} = require("../validators/track");
const { getItems, getItem, createItem } = require("../controllers/track");
=======
const {validatorCreateItem} = require("../validators/tracks")
const customHeader = require("../middleware/customHeader")
const { getItems, createItem } = require("../controllers/track");
>>>>>>> 28a5f53eb2e838bf8fc27f4383fdafa8efdc1eb9
const router = express.Router();

//vamos a declarar nuestras ruta para el modelo tracks comprendiendo los metodo GET, POST, DELETE, PUT

router.get("/", getItems);
<<<<<<< HEAD
router.post("/",validatorCreateItem, customHeader, createItem);
=======
router.post("/",validatorCreateItem, customHeader, createItem)
>>>>>>> 28a5f53eb2e838bf8fc27f4383fdafa8efdc1eb9
//router.get("/:id", getItem);

module.exports = router