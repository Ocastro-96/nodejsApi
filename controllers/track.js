
const { matchedData, body } = require("express-validator");
const {tracksModel} = require("../models")
const {handleHttpError} = require ("../utils/handleError")
/**
 * Obtener lista de Base de Datos
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) => {
    try {
        const data = await tracksModel.find({});
        res.send({ data })
    } catch (e) {
        handleHttpError(res,'ERROR_GET_ITEMS', 404)
    }
 }

/**
 * Obtener un Reguistro Especifico
 * @param {*} req 
 * @param {*} res 
 */
const getItem =  async (req, res) => { 
    try{
        req = matchedData(req)
        const {id} = req
        const data = await tracksModel.findById(id)
        res.send ({data});

    }catch (e){
        handleHttpError(res, "ERROR_GET_ITEM")
    }
}

/**
 * Insertar un Reguistro
 * @param {*} req 
 * @param {*} res 
 */
const createItem = async (req, res) => {
    
    try {
        const body= matchedData(req)
        const data = await tracksModel.create(body)
        res.send({data})
    } catch (e) {
        handleHttpError(res,'ERROR_CREATE_ITEMS')
    }
    
    
 }

/**
 * Actulazar o Modificar un Reguistro
 * @param {*} req 
 * @param {*} res 
 */
const updateItem = async (req, res) => { 
    try {
        const {id, ...body}= matchedData(req)
        
        const data = await tracksModel.findOneAndUpdate(
            id, body
        );
        res.send({data})
    } catch (e) {
        handleHttpError(e,'ERROR_UPDATE_ITEMS')
    }
    
}

/**
 * Eliminar un Reguistro
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = async (req, res) => { 
    try{
        req = matchedData(req)
        const {id} = req
        const data = await tracksModel.deleteOne({_id:id})
        res.send ({data});

    }catch (e){
        handleHttpError(res, "ERROR_DELETE_ITEM")
    }
}




module.exports = { getItems, getItem, createItem, updateItem, deleteItem }