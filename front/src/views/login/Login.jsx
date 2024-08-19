import React from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import axios from "axios";
import validateLogin from "../../helpers/ValidationLogin";
import swal from "sweetalert";
import { Link , useNavigate} from "react-router-dom";
import styles from "./Login.module.css"; 
import { useDispatch } from 'react-redux';
import { iniciarSeccion } from "../../redux/reducer";

function FormikLogin() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const alertLoginTry = () => {
    swal("Bienvenido", "Ingresaste correctamente", "success");
  };
  const alertLoginCatch = () => {
    swal("Usuario o contraseña incorrecta", "¡Vuelva a intentarlo!", "error");
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await axios.post("http://localhost:3000/users/login", values);
      alertLoginTry();
      dispatch(iniciarSeccion(response.data))
      console.log("Usuario autenticado:", response.data);
      resetForm();
      navigate("/");
    } catch (error) {
      alertLoginCatch();
      console.error("Error en el inicio de sesión:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{
        username: "",
        password: ""
      }}
      validate={validateLogin}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={styles.container}>
          <label className={styles.label}>Nombre de Usuario</label>
          <Field type="text" name="username" className={styles.input} />
          <ErrorMessage name="username" component="div" className={styles.error} />

          <label className={styles.label}>Contraseña</label>
          <Field type="password" name="password" className={styles.input} />
          <ErrorMessage name="password" component="div" className={styles.error} />

          <button type="submit" disabled={isSubmitting} className={styles.button}>
            Iniciar Sesión
          </button>
          <hr />
          <p className={styles.parrafo}>¿estas registrado?</p>
          <div className={styles.linkButton}>
            <Link to="/register" className={styles.linkButton}>
              <button className={styles.button}>Crear usuario</button>
            </Link>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default FormikLogin;
