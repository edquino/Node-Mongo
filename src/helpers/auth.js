const helpers = {};

helpers.isAuthenticated = (req, res, next) => {
    if(req.isAuthenticated()){
        return next();
    }

    req.flash('delete_msg', 'No Autenticado');
    res.redirect('/users/sign-in');
};

module.exports = helpers;