"use client"
import styles from "./styles/RazovaVlna.module.scss"
import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const RazovaVlna = () => {
    const [open, setOpen] = React.useState(false);

    return (
      <div className={styles.razovaVlna}>
        <div className={styles.imageWrapper}>
          <img
            src="./shockmaster-500.png"
            alt="ShockMaster 500"
            className={styles.mainImage}
          />
          <div className={styles.sideImages}>
            <img
              src="shockmaster1.jpeg"
              alt=""
              onClick={() => setOpen(true)}
              className={styles.image}
              style={{ borderBottomLeftRadius: "15px" }}
            />
            <img
              src="shockmaster3.jpeg"
              alt=""
              onClick={() => setOpen(true)}
              className={styles.image}
            />
            <div className={styles.showMore} onClick={() => setOpen(true)}>
              <img
                src="shockmaster2.jpeg"
                alt=""
                style={{
                  borderBottomRightRadius: "15px",
                  width: "100%",
                  height: "calc(100% - 0.83vh)",
                }}
                className={styles.image}
              />
              <div className={styles.filterShowMore}>+ 3</div>
            </div>
          </div>
          <Lightbox
            open={open}
            close={() => setOpen(false)}
            slides={[
              { src: "/shockmaster1.jpeg" },
              { src: "/shockmaster2.jpeg" },
              { src: "/shockmaster3.jpeg" },
            ]}
          />
        </div>
        <div className={styles.textWrapper}>
          <div className={styles.text}>
            <h1>Terapia Rázovou vlnou</h1>
            <p>
              Moderné zariadenie, ktoré umožňuje aplikovať terapie pomocou{" "}
              <span style={{ fontWeight: "bold" }}>
                neinvazívnych rázových vĺn
              </span>
              , využívajúci balistický princíp generovania rázových vĺn.
            </p>
            <ul>
              <li>
                Zlepšuje funkciu nervových vlákien regulujúcu výživu a látkovú
                premenu tkanív
              </li>
              <li>Zrychluje lokálny metabolizmus</li>
              <li>Uvolňuje svaly</li>
              <li>Zvyšuje</li>
              <ul>
                <li>Mikrocirkuláciu krvi</li>
                <li>Produkciu kolagénu</li>
              </ul>
              <li>Znižuje</li>
              <ul>
                <li>Lokálny pocit bolesti</li>
                <li>Svalové pnutie</li>
              </ul>
            </ul>
            <p>
              Využíva{" "}
              <span style={{ fontWeight: "bold" }}>
                akustické vlny na účely stimulácie lokálnej biologickej odozvy
                ošetrovaného tkaniva
              </span>
              . Pomáha pacientom najmä pri bolestiach alebo zápaloch.
            </p>
            <ul>
              <li>Ochorenia šliach a úponov</li>
              <li>Kalcifikáty</li>
              <li>Riešenie bolesti z preťaženia</li>
              <ul>
                <li>Tenisový lakeť</li>
                <li>Pätová ostroha</li>
                <li>Zápaly Achillovej šľachy</li>
              </ul>
            </ul>
            <h4 style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
              Upozornenie: Nie je možné použiť rázovú vlnu v prípade
              tehotenstva, zníženej zrážanlivosť krvi, trombózy alebo u detí v
              období rastu. Výsledný efekt pacient pociťuje po pár týždňoch
              absolvovania terapie, teda je k nej potrebné pristupovať
              zodpovedne a zúčastniť sa jej pravidelne.
            </h4>
          </div>
        </div>
      </div>
    );
}

export default RazovaVlna