const {Schema, model } = require("mongoose");

const userRoles = new Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    estado: {
        type: Number,
        required: true
    }
 },
{
    timestamps: true
});

module.exports = model('Roles', userRoles);