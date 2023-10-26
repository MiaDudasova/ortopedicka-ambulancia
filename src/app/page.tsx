"use client";
import styles from "../app/styles/Home.module.scss";
import Home from "./components/Home/Home";
import RazovaVlna from "./components/RazovaVlna/RazovaVlna";
import Kontakty from "./components/Kontakty/Kontakty";
import React, { useEffect, useState } from "react";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

const Index = () => {
  const [cennikOpened, setCennikOpened] = useState(false);

  return (
    <>
      <Header setCennikOpened={setCennikOpened} />
      <div className={styles.wrapper} onClick={() => setCennikOpened(false)}>
        <div
          className={styles.ortopedickaAmbulancia}
          id="ortopedicka-ambulancia"
          style={{
            paddingTop: "12vh",
            marginTop: "-12vh",
            opacity: cennikOpened ? "0.3" : "1",
          }}
        >
          <Home />
        </div>

        <div
          className={styles.razovaVlna}
          id="razova-vlna"
          style={{
            paddingTop: "12vh",
            marginTop: "-12vh",
            opacity: cennikOpened ? "0.3" : "1",
          }}
        >
          <RazovaVlna />
        </div>

        <div
          className={styles.kontakty}
          id="kontakty"
          style={{ opacity: cennikOpened ? "0.3" : "1" }}
        >
          <Kontakty />
        </div>
        {cennikOpened && (
          <div className={styles.cennikWrapper}>
            <img
              src="/images/CENNIK_AMBULANCIA_Šamorín.png"
              alt="Cenník"
              className={styles.cennik}
              onClick={() => setCennikOpened(!cennikOpened)}
            />
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Index;
