const {Router} = require('express');
const router = Router();

const { renderSignUpForm, signup, renderSignInForm, signIn, logout } = require('../controllers/users.controllers');

//Formulario - Registrar al Usuario 
router.get('/users/signup', renderSignUpForm);

//Guardar usuario
router.post('/users/signup', signup);

//Formulario - Inicio de Session
router.get('/users/sign-in', renderSignInForm);

//Iniciar - Sesion
router.post('/users/sign-in', signIn);

//Cierre de Session
router.get('/users/logout', logout);

module.exports = router;