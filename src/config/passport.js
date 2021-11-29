const passport = require('passport');
//Confoguracion de la estrategia de hacer login
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user');

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, async (email, password, done) => {

    const user = await User.findOne({email});

    if(!user){
        // La funcion done tiene que enviare tres parametros.
        // Error. Request. Options -> Message
        return done(null, false, { message: 'Usuario no encontrado'});
    }else{
        const match = await user.matchpassword(password);
        if(match){
            return done(null, user);
        }else{
            return done(null, false, { message: 'Contraseña es Incorrecta'})
        }
    }
}));

passport.serializeUser((user, done)  => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
});