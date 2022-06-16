const express = require("express");
const router = express.Router();
const uploadMiddleware = require("../utils/handlerStorage");
const { createItem } = require("../controllers/storage");

//http://localhost:3002/api/storage link al que vamos a enrutar


router.post("/", uploadMiddleware.single("myfile"), createItem)
module.exports = router;