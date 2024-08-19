import { useEffect, useState } from "react";
import CardTurnos from "../../components/card turnos/cardTurnos";
import styles from "./MisTurnos.module.css";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { turnosUser } from "../../redux/reducer";

const getUserById = "http://localhost:3000/users/";
const putCancelTurn = "http://localhost:3000/appointments/cancel/";

export default function MisTurnos() {
  const turnos = useSelector((state) => state.actualUser.userAppoiments);
  const dispatch = useDispatch();
  const userById = useSelector((state) => state.actualUser.userData.id);
  const loggin = useSelector((state) => state.actualUser.userData.id);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(getUserById + userById)
      .then((response) => response.data)
      .then((actualUser) => {
        dispatch(turnosUser(actualUser.turns));
      });
  }, [loggin, dispatch]);

  useEffect(() => {
    !loggin && navigate("/home");
  }, [loggin]);

  const handleCancelTurn = (turnId) => {
    axios
      .put(putCancelTurn + turnId)
      .then((response) => response.data)
      .then((data) => {
        axios
          .get(getUserById + userById)
          .then((response) => response.data.turns)
          .then((turnos) => dispatch(turnosUser(turnos)));
      });
  };

  return (
    <div>
      <h1 className={styles.title}>Mis turnos</h1>
      <hr />
      <div className={styles.Container}>
        {turnos.map((turno) => (
          <CardTurnos
            key={turno.id}
            id={turno.id}
            date={turno.date}
            time={turno.time}
            status={turno.status}
            handleCancelTurn={handleCancelTurn}
          />
        ))}
      </div>
      <div className={styles.linkButton}>
        <Link to="/turncreate" className={styles.linkButton}>
          <button className={styles.button}>Crear turno</button>
        </Link>
      </div>
    </div>
  );
}
