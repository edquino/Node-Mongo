const { Pool } = require('pg');

const {
  DB_HOTS_RUTAS_UNIDAS, 
  DB_NAME_RUTAS_UNIDAD, 
  DB_PASS_RUTAS_UNIDAD, 
  DB_USER_RUTAS_UNIDAD, 
  DB_PORT_RUTAS_UNIDAD} = process.env;

const pool = new Pool({
    host:DB_HOTS_RUTAS_UNIDAS,
    user:DB_USER_RUTAS_UNIDAD,
    password: DB_PASS_RUTAS_UNIDAD,
    database: DB_NAME_RUTAS_UNIDAD,
    port: DB_PORT_RUTAS_UNIDAD
});

module.exports = pool;