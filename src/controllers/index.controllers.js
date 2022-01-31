const db = require('../database');
const indexCtrl = {};


indexCtrl.renderIndex = async(req, res) => {
    res.render('home/home');
}; 

indexCtrl.renderAbout = (req, res) => {
    res.render('about');
};

module.exports = indexCtrl;