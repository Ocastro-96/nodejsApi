const express = require("express");
const uploadMiddleware = require("../utils/handlerStorage");
const router = express.Router();
//http://localhost:3002/api/storage link al que vamos a enrutar



router.post("/", uploadMiddleware.single("myfile"), (req, res)=>{
    res.send({a:5})
})
module.exports = router