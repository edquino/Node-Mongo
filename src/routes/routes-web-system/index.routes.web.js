module.exports = (app, passport) =>{
    app.use(require('./user-roles/user_roles.router'));
}