const mongoose = require('mongoose')

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

module.exports = mongoose.model("storage", StorageScheme)
