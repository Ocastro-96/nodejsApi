/**
 * Obtener lista de Base de Datos
 * @param {*} req 
 * @param {*} res 
 */
const getItems = (req, res) => { 
    const data = ["hola", "mundo"]
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
const createItem = (req, res) => { }

/**
 * Actulazar o Modificar un Reguistro
 * @param {*} req 
 * @param {*} res 
 */
const updateItems = (req, res) => { }

/**
 * Eliminar un Reguistro
 * @param {*} req 
 * @param {*} res 
 */
const deleteItems = (req, res) => { }




module.exports = { getItems, getItem, createItem, updateItems, deleteItems }