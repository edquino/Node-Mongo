const usersCtrl = {};

const passport = require('passport');
const User = require('../models/user');

usersCtrl.renderSignUpForm = (req, res) =>{
    res.render('users/signup');
};

usersCtrl.signup = async (req, res) =>{
   const { user, name, lastname, email, password, confirm_password} = req.body;
    console.log(req.body);
   let errors = []

   if(password != confirm_password){
    errors.push({text: 'Las contraseña no coinciden'});
   }

   if(password.length < 4){
    errors.push({text: 'Las contraseña debe ser mayor a 4 caracteres'});
   }

   if (errors.length > 0){
    console.log('envio los datos nuevamente');
    res.render('users/signup', { errors, user, name, lastname, email});
   }else{
    
    const userName = await User.findOne({user});
    if(userName){
        req.flash('delete_msg', 'Este usuario ya esta en uso');
        res.redirect('/users/signup');
    }else{
        const userNew = new User({user, name, lastname, email, password});
        userNew.password = await userNew.encryptpassword(password);
        await userNew.save();
        req.flash('success_msg', 'Usuario Creado Correctamente');
        res.redirect('/users/signup');
    }
   }
//    const newUser = new User({user, name, lastname, password});
//    await newUser.save();


};


usersCtrl.renderSignInForm = (req, res) => {
   res.render('users/login');
};

usersCtrl.signIn = passport.authenticate('local', {
    failureRedirect: '/users/sign-in',
    successRedirect: '/notes',
    failureFlash: true
});

usersCtrl.logout = (req, res) => {
    req.logout();
    res.redirect('/users/sign-in');
};


module.exports = usersCtrl;