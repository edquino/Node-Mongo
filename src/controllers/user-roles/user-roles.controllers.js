//const Role = require('../../models/user-roles/user_roles.model');
const db = require('../../database');
const rolesUser = {};


rolesUser.rolesLit = async(req, res) => {
    try {
        await db.query("SELECT * FROM sru_roles_usuario WHERE estado_reg = 'A' ORDER BY id_rol_usuario ASC", (err, results) =>{
            if(err){
                console.log(err);
            }else{
                let roles = results.rows;
                res.render('user-roles/roles_list', { roles });
            } 
        });
    } catch (error) {
        console.log(error);
    }
};


rolesUser.createRoleView = async(req, res) =>{
    try {
        res.render('user-roles/create_role');
    } catch (error) {
        console.log(error);
    }
};


rolesUser.createRole = async(req, res) => {
    
    const { nombre, descripcion, estado } = req.body;

    try {
        await db.query('INSERT INTO sru_roles_usuario (nombre, descripcion, estado_rol) VALUES($1, $2, $3)', 
        [nombre, descripcion, estado], (err, results) => {
            if(err){
                console.log(err);
            }else{
                req.flash('success_msg', 'Rol creado correctamente');
                res.redirect('/api/user-roles/list');
            }
        });
        
    } catch (error) {
        console.log(error);
    }
};


rolesUser.getById = async(req, res) => {
    const { id_role } = req.params;
    try {
        await db.query('SELECT * FROM sru_roles_usuario WHERE id_rol_usuario = $1', [id_role], (err, results) =>{
            if(err){
                console.log(error);
            }else{
                let role = results.rows[0];
                console.log(role);
                res.render('user-roles/update_role', { role });     
            }
        })
        // if(role.user != req.user.id){
        //     req.flash('delete_msg', 'No Autorizado');
        //     return res.redirect('/notes');
        // }
    } catch (error) {
        console.log(error);
    }

};


rolesUser.updateRole = async(req, res) => {

    const { id_role } = req.params;
    const { nombre, descripcion, estado } = req.body;

    try {
        
        await db.query('UPDATE sru_roles_usuario SET nombre = $1, descripcion = $2, estado_rol = $3 WHERE id_rol_usuario = $4',
        [nombre, descripcion, estado, id_role], (err, results) =>{
            if(err){
                 console.log(err);
            }else{
                req.flash('warning_msg', 'Rol Actualizado Correctamente');
                res.redirect('/api/user-roles/list');
            }
        });
        
    } catch (error) {
        console.log(error);
        req.flash('warning_msg', 'Error al intentar actulizar el registro');
    }
};

rolesUser.updateStateRol = async(req, res) => {

    const { id_role } = req.params;

    try {
        
        await db.query("UPDATE sru_roles_usuario SET estado_reg = 'I' WHERE id_rol_usuario = $1 RETURNING*",
        [ id_role ], (err, results) =>{
            if(err){
                 console.log(err);
            }else{
                let role = results.rows[0];
                console.log(role);
                req.flash('delete_msg', 'Rol eleminado Correctamente');
                res.redirect('/api/user-roles/list');
            }
        });
        
    } catch (error) {
        console.log(error);
    }
};

module.exports = rolesUser;
