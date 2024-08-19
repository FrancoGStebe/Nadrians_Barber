import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { validateTurn } from "../../helpers/validateTurns";
import Swal from "sweetalert2";
import styles from "./TurnoRegister.module.css"; 

const postTurn = "http://localhost:3000/appointments/schedule";

export default function TurnosRegister(props) {
    const navigate = useNavigate();
    const userId = useSelector(state => state.actualUser.userData.id);
    const [formData, setFormData] = useState({
        date: "",
        time: ""
    });

    useEffect(() => {
        if (!userId) {
            navigate("/home");
        }
    }, [userId, navigate]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const validationError = validateTurn(formData);
        if (validationError) {
            console.error("Error al validar el turno:", validationError);
            Swal.fire({
                icon: "error",
                title: "Error",
                text: validationError,
            });
            return;
        }
    
        try {
            const newTurn = {
                ...formData,
                userId: userId,
                status: "active"
            };
            const response = await axios.post(postTurn, newTurn);
            console.log("Turno creado exitosamente:", response.data);
            Swal.fire({
                icon: "success",
                title: "Turno Reservado",
                text: "Su turno se reservó correctamente.",
            });
            navigate("/turnos");
        } catch (error) {
            console.error("Error al crear el turno:", error);
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Hubo un problema al reservar su turno. Inténtelo de nuevo.",
            });
        }
    };
    
    useEffect(() => {
        if (formData.date) {
            const turnDate = new Date(formData.date);
            const dayOfWeek = turnDate.getUTCDay();
            if (dayOfWeek === 0 || dayOfWeek === 6) {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "Lo siento, estamos cerrados los fines de semana.",
                });
            }
        }
    }, [formData.date]);

    return (
        <div className={`${styles.container} ${styles.form}`}>
            <h1 className={styles.titulo}>Crear Turno</h1>
            <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label className={styles.label}>
                        Fecha:
                        <input
                            className={styles.input}
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                        />
                    </label>
                    <label className={styles.label}>
                        Hora:
                        <input
                            className={styles.input}
                            type="time"
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            step="1800"
                        />
                    </label>
                </div>
                <button className={styles.button} type="submit">Crear Turno</button>
            </form>
        </div>
    );
};
