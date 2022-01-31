const { Router } = require("express");
const router = Router();
const { isAuthenticated } = require('../../../helpers/auth');

const { 
    rolesLit, 
    createRole, 
    createRoleView, 
    getById, 
    updateRole,
    updateStateRol } = require('../../../controllers/user-roles/user-roles.controllers');



//list role
router.get('/api/user-roles/list', rolesLit);

//create-rol
router.get('/api/user-roles/create-rol', createRoleView);
router.post('/api/user-roles/create-rol', createRole);

//Update-data-rol
router.get('/api/user-roles/update-rol/:id_role', getById);
router.post('/api/user-roles/update-rol/:id_role', updateRole);

//Update-State
router.post('/api/user-roles/update-rol/:id_role/state', updateStateRol);

module.exports = router;