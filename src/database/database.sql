CREATE TABLE sru_roles_usuario(
    id_rol_usuario SERIAL PRIMARY KEY NOT NULL,
    nombre VARCHAR (70) NOT NULL,
    descripcion VARCHAR (500) DEFAULT 'Descripcion no proporcionada',
    estado_rol CHAR(1) NOT NULL DEFAULT 'A',
    estado_reg CHAR(1) NOT NULL DEFAULT 'A',
    fecha_ing TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, 
    fecha_mod TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT sru_roles_usuario CHECK (estado_rol::text = ANY (ARRAY['A'::character varying::text, 'I'::character varying::text])),
    CONSTRAINT sru_roles_usuario CHECK (estado_reg::text = ANY (ARRAY['A'::character varying::text, 'I'::character varying::text]))

); 

INSERT INTO sru_roles_usuario (nombre, descripcion, estado_rol) VALUES ('Administrador', 'Acceso y control total al sistema.');
INSERT INTO sru_roles_usuario (nombre, descripcion, estado_rol) VALUES ('Consulta','Solo podrá hacer consulta de los datos.');
INSERT INTO sru_roles_usuario (nombre, descripcion, estado_rol) VALUES ('Operativo', 'Consulta de datos, registro de carreras y generación de reportes.');