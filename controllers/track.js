
const {tracksModel} = require("../models")
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
const getItem = (req, res) => { }

/**
 * Insertar un Reguistro
 * @param {*} req 
 * @param {*} res 
 */
const createItem = async (req, res) => {
    
    try {
        const{body}= req
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
const updateItem = (req, res) => { 
    
}

/**
 * Eliminar un Reguistro
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = (req, res) => { }




module.exports = { getItems, getItem, createItem, updateItem, deleteItem }