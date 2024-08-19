const validateLogin = (values) => {
    const errors = {};


    if (!values.username) {
        errors.username = "El nombre de usuario es obligatorio";
    }


    if (!values.password) {
        errors.password = "La contraseña es obligatoria";
    }

    return errors;
}

export default validateLogin;
