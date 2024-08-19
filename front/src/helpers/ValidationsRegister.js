

const validateRegister = (values) => {
    const errors = {};

   
    if (!values.name) {
        errors.name = "El nombre es obligatorio";
    }

    if (!values.email) {
        errors.email = "El email es obligatorio";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.email)) {
        errors.email = "El email no es válido";
    }

    if (!values.birthdate) {
        errors.birthdate = "La fecha de nacimiento es obligatoria";
    }

   
    if (!values.nDni) {
        errors.nDni = "El DNI es obligatorio";
    }

   
    if (!values.username) {
        errors.username = "El nombre de usuario es obligatorio";
    }

   
    if (!values.password) {
        errors.password = "La contraseña es obligatoria";
    } else if (values.password.length < 6) {
        errors.password = "La contraseña debe tener al menos 6 caracteres";
    }

   
    if (!values.confirmPassword) {
        errors.confirmPassword = "Confirmar la contraseña es obligatorio";
    } else if (values.confirmPassword !== values.password) {
        errors.confirmPassword = "Las contraseñas no coinciden";
    }

    return errors;
}

export default validateRegister;
