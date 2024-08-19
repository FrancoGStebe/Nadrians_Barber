import styles from "./cardTurnos.module.css";
import swal from "sweetalert2";

function CardTurns({ id, date, time, userId, status, handleCancelTurn }) {

    date = new Date(date);


    const formatDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;


    const handleClick = () => {
        swal.fire({
            title: "¿Estás seguro?",
            text: "¡No podrás revertir esto!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sí, Cancelar"
        }).then((result) => {
            if (result.isConfirmed) {
                handleCancelTurn(id);
                Swal.fire({
                    title: "¡Cancelado!",
                    text: "Su turno ha sido cancelado.",
                    icon: "success"
                });
            }
        });
    };
    

    return (
        <div className={styles.cardContainer}>
            <span className={styles.cardDate}>{formatDate}</span>
            <span className={styles.cardTime}>{time}</span>
            {
                status === "active"
                ? (<span className={`${styles.cardStatus} ${styles.active}`} onClick={handleClick}>Activo</span>)
                : (<span className={`${styles.cardStatus} ${styles.cancelled}`}>Cancelado</span>)
            }
        </div>
    );
}

export default CardTurns;
