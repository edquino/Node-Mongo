const {Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

const userschema = new Schema({
    user: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type:String,
        required:true
    },
    password:{
        type: String,
        required: true
    }
},{
    timestamps: true
});

//Encriptar contraseña
userschema.methods.encryptpassword = async password =>{
    //Este metodo es asyncrono
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};


//comparar contraseña
userschema.methods.matchpassword = async function(password){
    return await bcrypt.compare(password, this.password);
};


module.exports = model('User', userschema);