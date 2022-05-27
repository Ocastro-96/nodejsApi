const express = require("express");
const { getItems } = require("../controllers/track");
const router = express.Router();

//vamos a declarar nuestras ruta para el modelo tracks comprendiendo los metodo GET, POST, DELETE, PUT

router.get("/", getItems);
router.get("/:id", getItem);

module.exports = router