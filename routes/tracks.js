const express = require("express");
const { route } = require("express/lib/application");
const { getItems, createItem } = require("../controllers/track");
const router = express.Router();

//vamos a declarar nuestras ruta para el modelo tracks comprendiendo los metodo GET, POST, DELETE, PUT

router.get("/", getItems);
router.post("/", createItem)
//router.get("/:id", getItem);

module.exports = router