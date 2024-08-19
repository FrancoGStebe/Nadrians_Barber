import React from 'react';
import logo1 from "../../assets/github.png";
import logo2 from "../../assets/facebook.png";
import logo3 from "../../assets/instagram.png";
import logo4 from "../../assets/whatsapp.png";
import styles from "./ContactForm.module.css"; // Importa los estilos

export default function Contacto() {
  return (
    <div className={styles.contacto-container}>
      <h1 className={styles.titulo}>Si necesita más información, contáctenos!</h1>
      
      <div className={styles.iconContainer}>
        <a href="https://github.com/FrancoGStebe" target="_blank" rel="noopener noreferrer">
          <img src={logo1} alt="Logo 1" />
        </a>
        <a href="https://www.facebook.com/franck.stebe/" target="_blank" rel="noopener noreferrer">
          <img src={logo2} alt="Logo 2" />
        </a>
        <a href="https://www.instagram.com/franco_stiib/" target="_blank" rel="noopener noreferrer">
          <img src={logo3} alt="Logo 3" />
        </a>
        <a href="https://wa.me/+5492664187782" target="_blank" rel="noopener noreferrer">
          <img src={logo4} alt="Logo 4" />
        </a>
      </div>
    </div>
  );
}
