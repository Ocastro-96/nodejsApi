
const {tracksModel} = require("../models")
/**
 * Obtener lista de Base de Datos
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) => { 
    const data = await tracksModel.find({});
    res.send({ data })
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
    const{body}= req
    console.log(body)
    const data = await tracksModel.create(body)
    res.send({data})
 }

/**
 * Actulazar o Modificar un Reguistro
 * @param {*} req 
 * @param {*} res 
 */
const updateItem = (req, res) => { }

/**
 * Eliminar un Reguistro
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = (req, res) => { }




module.exports = { getItems, getItem, createItem, updateItem, deleteItem }