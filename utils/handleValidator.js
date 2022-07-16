const { validationResult} = require("express-validator")

const validateResults =(req, res, next)=>{
 try{
    validationResult(req).thow();
    return next();//continua hacia el controlador
 } catch (err){
    res.status(403);
    res.send({ errors: err.array()});
 }
}

module.exports = validateResults