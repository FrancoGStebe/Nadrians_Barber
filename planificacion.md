## "User Histori".
*
1- Como usuario invitado:
 *quiero poder ver de que se trata la pagina.
 *quiero saber donde queda el lugar.
 *quiero registrarte, como nuevo usuario.
 ## extra credit
 *poder poner mi foto de perfil. (cloudinary)
 *recibir un gmail. (nodemailer)
2- Como usuario registrado:
 *quiero iniciar session.
 *quiero reservar un turno.
 *quiero elegir el dia y hora.
   -que no sean dos el mismo dia.
   -que no sea fuera de horario de atencion.
 *queiro cancelar el turno.
 *quiero recibir un mensaje para confirmar mi cancelacion.
 *poder cerrar session.

## "relacion entidad".

// * Users
- id
- name
- email
- contraseña

// * Turno
- id
- fecha
- hora 
- estado 
- id usuario
- id servicio 

// * Servicio
- id
- nombre
- descripcion
- duracion
- precio
