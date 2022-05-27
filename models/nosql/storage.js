const mongoose = require('mongoose')

const StorageScheme = new mongoose.Schema(
    {
        url: {
            type: String,
        },
        filename: {
            type: Number,
        }
    },
    {
        timestamps: true, //TODO createdAt, updatedAt se usa este tipo de esquema
        versionKey: false
    }
);

module.exports = mongose.model("storage", StorageScheme)
