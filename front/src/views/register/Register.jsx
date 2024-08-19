import React from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import axios from "axios";
import validateRegister from "../../helpers/ValidationsRegister";
import swal from "sweetalert";
import styles from "./Register.module.css"; 
import { useNavigate } from "react-router-dom";

function FormikRegister() {
    const navigate = useNavigate();
    const alertaTry = () => {
        swal("Bienvenido", "Tu registro fue exitoso!", "success");
    };

    const alertaCatch = () => {
        swal("No se pudo registrar", "¡Vuelva a intentarlo!", "error");
    };

    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        try {
            const { confirmPassword, ...submitValues } = values;

            const response = await axios.post("http://localhost:3000/users/register", submitValues);
            alertaTry();
            console.log(response.data);
            resetForm();
            navigate("/login");
        } catch (error) {
            alertaCatch();
            console.error(error);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <>
            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    birthdate: "",
                    nDni: "",
                    username: "",
                    password: "",
                    confirmPassword: ""
                }}
                validate={validateRegister}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form className={styles.container}>
                        <label className={styles.label}>Nombre</label>
                        <Field type="text" name="name" className={styles.input} />
                        <ErrorMessage name="name" component="div" className={styles.error} />

                        <label className={styles.label}>Email</label>
                        <Field type="email" name="email" className={styles.input} />
                        <ErrorMessage name="email" component="div" className={styles.error} />

                        <label className={styles.label}>Cumpleaños</label>
                        <Field type="date" name="birthdate" className={styles.input} />
                        <ErrorMessage name="birthdate" component="div" className={styles.error} />

                        <label className={styles.label}>Dni</label>
                        <Field type="text" name="nDni" className={styles.input} />
                        <ErrorMessage name="nDni" component="div" className={styles.error} />

                        <label className={styles.label}>Nombre de Usuario</label>
                        <Field type="text" name="username" className={styles.input} />
                        <ErrorMessage name="username" component="div" className={styles.error} />

                        <label className={styles.label}>Contraseña</label>
                        <Field type="password" name="password" className={styles.input} />
                        <ErrorMessage name="password" component="div" className={styles.error} />

                        <label className={styles.label}>Confirmar Contraseña</label>
                        <Field type="password" name="confirmPassword" className={styles.input} />
                        <ErrorMessage name="confirmPassword" component="div" className={styles.error} />

                        <button type="submit" disabled={isSubmitting} className={styles.button}>
                            Crear
                        </button>
                    </Form>
                )}
            </Formik>
        </>
    );
}

export default FormikRegister;
