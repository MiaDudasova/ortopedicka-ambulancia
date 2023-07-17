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
        </div>
        <div className={styles.kontaktWrapper}>
          <div className={styles.kontakt}>
            <h3>Kontakt</h3>
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

            <div className={styles.ordinacneHodiny}>
              <h3>Ordinačné hodiny</h3>
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
