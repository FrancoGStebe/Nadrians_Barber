import React from "react";
import styles from "./Contacto.module.css";

import logo1 from "../../assets/facebook.png";
import logo2 from "../../assets/instagram.png";
import logo3 from "../../assets/github.png";
import logo4 from "../../assets/whatsapp.png";

export default function Contacto() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Si tienes alguna duda, no dudes en contactarnos!</h1>
            <div className={styles.mapContainer}>
                <iframe 
                    title="Barbería Ficticia"
                    className={styles.map}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.092814326903!2d-122.40101248468157!3d37.78583597975642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064d2d5b3eb%3A0xf2a1d1f1a3e8b2!2sFictitious%20Barber!5e0!3m2!1sen!2sus!4v1599827890745!5m2!1sen!2sus"
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                ></iframe>
            </div>
            <div className={styles.logos}>
                <img src={logo2} alt="Instagram" className={styles.logo} />
                <img src={logo3} alt="GitHub" className={styles.logo} />
                <img src={logo1} alt="Facebook" className={styles.logo} />
                <img src={logo4} alt="WhatsApp" className={styles.logo} />
            </div>
        </div>
    );
}
