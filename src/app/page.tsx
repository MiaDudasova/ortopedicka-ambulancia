"use client";
import styles from "../app/styles/Home.module.scss";
import Head from "next/head";
import Home from "./components/Home/Home";
import RazovaVlna from "./components/RazovaVlna/RazovaVlna";
import * as React from "react";
import "yet-another-react-lightbox/styles.css";

const Index = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.ortopedickaAmbulancia} id="home">
        <Home />
      </div>

      <div className={styles.razovaVlna} id="razovaVlna">
        <RazovaVlna />
      </div>

      <div className={styles.kontakty}>
        <div className={styles.imageWrapper}>
          <img
            src="./ortoticke-centrum-mapa.png"
            alt="Mapa"
            className={styles.image}
          />
          <a href="https://www.google.com/maps/place/ORTOTICK%C3%89+CENTRUM+s.r.o/@48.0239872,17.319626,17z/data=!4m6!3m5!1s0x476c7fb712aac6b1:0x722a3e82de6da923!8m2!3d48.0232338!4d17.3221151!16s%2Fg%2F11f5grpdmg?entry=ttu" target="_blank" className={styles.mapa}>Zobraziť na mape</a>
        </div>
        <div className={styles.kontaktWrapper}>
          <div className={styles.kontaktOrdinacne}>
            <div className={styles.kontakt}>
              <h2>Kontakt</h2>
              <div className={styles.adresa}>
                ORTOTICKÉ CENTRUM s.r.o. <br /> Stará cesta 715 <br /> 931 01
                Šamorín
              </div>
              <br />
              <div className={styles.kontaktneInfo}>
                <div className={styles.labels}>
                  Informácie: <br /> E-mail:
                </div>
                <div className={styles.info}>
                  0908 446 496 <br />{" "}
                  <a href="mailto:info@ortotickecentrum.sk">
                    info@ortotickecentrum.sk
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.ordinacneHodiny}>
              <h2>Ordinačné hodiny</h2>
              <div className={styles.hodiny}>
                <div className={styles.dni}>
                  Utorok <br /> Streda <br /> Štvrtok <br /> Piatok
                </div>
                <div className={styles.otvaracieHodiny}>
                  8:30 <br /> 17:00 <br /> 8:30 <br /> 17:00
                </div>
                <div className={styles.do}>
                  - <br /> - <br /> - <br /> -
                </div>
                <div className={styles.zatvaracieHodiny}>
                  12:00 <br /> 20:00 <br /> 12:00 <br /> 20:00
                </div>
                <div className={styles.obed}>
                  obed <br /> <br /> obed
                </div>
                <div className={styles.otvaracieHodinyObed}>
                  12:30 <br /> <br /> 12:30
                </div>
                <div className={styles.doObed}>
                  - <br /> <br /> -
                </div>
                <div className={styles.zatvaracieHodinyObed}>
                  15:00 <br /> <br /> 19:00
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
