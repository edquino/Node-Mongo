module.exports = (app, passport) => {
    require('./routes-web-system/index.routes.web')(app, passport);
}