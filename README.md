# Nadrian'S Barber 

## Descripción

Este proyecto es una plataforma web diseñada para gestionar citas en una barbería. Emplea una serie de tecnologías avanzadas para proporcionar una experiencia de usuario fluida y efectiva. La plataforma incluye varias secciones y funciones clave.

## Tecnologías Utilizadas

### Frontend

- React con JavaScript
- CSS con módulos de estilo

### Backend

- TypeScript
- PostgreSQL

## Características

- **Secciones Estáticas**
  - **Inicio:** Página principal con detalles generales y los servicios ofrecidos por la barbería.
  - **Acerca de:** Información sobre la barbería, incluyendo sus instalaciones y el equipo de trabajo.

- **Registro e Inicio de Sesión**
  - **Registro de Usuarios:** Permite a los nuevos usuarios crear una cuenta.
  - **Inicio de Sesión:** Permite a los usuarios existentes acceder a su cuenta.

- **Gestión de Citas (Solo para Usuarios Registrados)**
  - **Consultar Citas:** Los usuarios pueden visualizar las citas que ya han reservado.
  - **Agendar Nueva Cita:** Los usuarios pueden solicitar una nueva cita completando un formulario.
  - **Cancelar Citas:** Los usuarios tienen la opción de cancelar las citas previamente reservadas.

## Instalación

Para ejecutar este proyecto en tu máquina local, sigue estos pasos:

1. **Clonar el repositorio:**

    ```bash
    git clone https://github.com/TuUsuario/Nadrians_Barber.git
    ```

2. **Navegar al directorio del proyecto:**

    ```bash
    cd Nadrians_Barber
    ```

### Frontend

3. **Instalar las dependencias:**

    ```bash
    cd frontend
    npm install
    ```

4. **Iniciar la aplicación React:**

    ```bash
    npm start
    ```

5. **Abrir el proyecto en tu navegador:**
   - Visita `http://localhost:3000` para ver la aplicación en funcionamiento.

### Backend

6. **Navegar al directorio del backend:**

    ```bash
    cd backend
    ```

7. **Instalar las dependencias:**

    ```bash
    npm install
    ```

8. **Configurar la base de datos:**
   - Asegúrate de que PostgreSQL esté instalado y en funcionamiento.
   - Crea un archivo `.env` en la raíz del directorio `backend` con la conexión a tu base de datos PostgreSQL:

     ```env
     DATABASE_URL=postgres://usuario:contraseña@localhost:5432/nombre-de-tu-bd
     ```

9. **Iniciar el servidor:**

    ```bash
    npm start
    ```

10. **El servidor estará disponible en:**
    - `http://localhost:4000`
   
11. ## Autor

Este proyecto fue desarrollado por Franco Gabriel Stebe. Si tienes alguna pregunta o necesitas más información, no dudes en ponerte en contacto conmigo.

