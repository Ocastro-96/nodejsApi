const mongoose = require("mongoose")
//creamos el esquema usando la libreria de Mongoose
const UserScheme = new mongoose.Schema({
    name: {
        type: String,
    },
    age: {
        type: Number,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    },
    role: {
        type: ["user", "admin"],
        default: "user",
    }

},
    {
        timestamps: true,
        versionKey: false
    }
);

// exportamos el modelo pasando le el nombre de la tabla en mysql o colleccion en mongoDB llamado 'User' y pasamos tambien el esquema anteriormente creado 
module.exports = mongoose.model("users", UserScheme);