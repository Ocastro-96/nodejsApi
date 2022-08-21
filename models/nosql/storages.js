const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete')

const StorageScheme = new mongoose.Schema(
    {
        filename: {
            type: String,
        },
        url: {
            type: String,
        }      
    },
    {
        timestamps: true, //TODO createdAt, updatedAt se usa este tipo de esquema
        versionKey: false
    }
);
StorageScheme.plugin(mongooseDelete, {overrideMethods:"all"});
module.exports = mongoose.model("storages", StorageScheme)
