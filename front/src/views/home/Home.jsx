import React from 'react';

import imagen1 from '../../assets/barber1.jpg';
import imagen2 from '../../assets/barber2.jpg';
import imagen3 from '../../assets/barber3.jpg';

import style from "./Home.module.css";

export default function Home() {
  return (
    <div className={style["home-container"]}>
        <h1>¡Bienvenido!</h1>
        <p>Descubre la excelencia en el cuidado personal masculino.</p>
      <div className={style["image-container"]}>
        <img src={imagen1} alt="Barbería en acción" />
        <img src={imagen2} alt="Servicio de corte de cabello" />
        <img src={imagen3} alt="Productos de alta calidad" />
      </div>
      <div className={style["text-container"]}>
        <p>
          En nuestra barbería, nos enorgullece ofrecer servicios de alta calidad para el cuidado del cabello y la barba. Nuestro equipo de barberos profesionales está dedicado a proporcionar una experiencia personalizada y relajante, asegurando que cada cliente salga sintiéndose renovado y con estilo.
        </p>
        <p>
          Utilizamos solo los mejores productos del mercado para garantizar resultados excepcionales. Ya sea que busques un corte clásico, un afeitado moderno o simplemente un retoque, estamos aquí para ayudarte a lucir lo mejor posible.
        </p>
        <p>
          Visítanos y descubre por qué somos la elección preferida para el cuidado masculino. ¡Te esperamos!
        </p>
        
      </div>
    </div>
  );
}
