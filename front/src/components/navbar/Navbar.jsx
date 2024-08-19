import React from 'react';
import logo from '../../assets/nadrian.png'; 
import styles from './Navbar.module.css'; 
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

export default function Navbar() {

    const loggin = useSelector(state => state.actualUser.userData.id);

    return (
        <div className={styles.navbarWrapper}>
            <div className={styles.logoContainer}>
                <img src={logo} alt="logo" className={styles.logoImage} />
            </div>
            <div className={styles.navbar}>
                <div className={styles.navbarContainer}>
                    <Link to="/">
                    <div className={styles.navItem}>Home</div>
                    </Link>

                    <Link to="/login">
                    <div className={styles.navItem}>Login</div>
                    </Link>

                     {loggin &&
                    <Link to="/turnos">
                    <div className={styles.navItem}>Turnos</div>
                    </Link>
                     }
                    

                    <Link to="/contacto">
                    <div className={styles.navItem}>Contacto</div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

