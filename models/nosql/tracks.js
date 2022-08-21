const mongoose = require("mongoose")
const mongooseDelete = require("mongoose-delete")
const tracksScheme = new mongoose.Schema(
    {
        name: {
            type: String,
        },

        album: {
            type: String,
        },

        cover: {
            type: String,
            validate: {
                validator: (req) => {
                    return true;
                },
                message: "ERROR_URL"
            },
        },

        artist: {
            name: {
                type: String,
            },
            nickname: {
                type: String,
            },
            nationality: {
                type: String,
            },
        },

        duration: {
            start: {
                type: Number,
            },
            end: {
                type: Number,
            },
        },
        mediaId: {
            type: String
        },

    },
    {
        timestamps: true, //TODO createdAt, updatedAt se usa este tipo de esquema
        versionKey: false
    }
);
tracksScheme.plugin(mongooseDelete, {overrideMethods:"all"});
module.exports = mongoose.model("tracks", tracksScheme)
