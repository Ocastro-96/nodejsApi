const express = require("express");
const fs = require("fs");
const { default: mongoose } = require("mongoose");
const router = express.Router();

const PATH_ROUTES = __dirname;

const removeExtension = (fileName) => {
    return fileName.split('.').shift()
}


fs.readdirSync(PATH_ROUTES)
    .filter((file) => {
        const name = removeExtension(file) //TODO INDEX, TRACKS
        if (name !== 'index') {
            console.log(`cargando ruta ${name}`)
            router.use(`/${name}`, require(`./${file}`))
        }

    })

module.exports = router;