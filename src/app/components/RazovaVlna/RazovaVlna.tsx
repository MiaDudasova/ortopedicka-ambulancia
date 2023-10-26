"use client";
import styles from "./styles/RazovaVlna.module.scss";
import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";

const RazovaVlna = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className={styles.razovaVlna}>
      <div className={styles.imageWrapper}>
        <img
          src="./images/shockmaster-500.png"
          alt="ShockMaster 500"
          className={styles.mainImage}
        />
        <div className={styles.sideImages}>
          <img
            src="/images/shockmaster-therapy1.jpg"
            alt=""
            onClick={() => setOpen(true)}
            className={styles.image}
            style={{ borderBottomLeftRadius: "15px" }}
          />
          <img
            src="/images/shockmaster-therapy3.png"
            alt=""
            onClick={() => setOpen(true)}
            className={styles.image}
          />
          <div className={styles.showMore} onClick={() => setOpen(true)}>
            <img
              src="/images/shockmaster-therapy2.webp"
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
          plugins={[Counter]}
          counter={{ container: { style: { top: "unset", bottom: 0 } } }}
          open={open}
          close={() => setOpen(false)}
          slides={[
            {
              src: "/images/shockmaster-therapy1.jpg",
              alt: "image 1",
              width: 3840,
              height: 2560,
            },
            {
              src: "/images/shockmaster-therapy2.webp",
              alt: "image 1",
              width: 3840,
              height: 2560,
            },
            {
              src: "/images/shockmaster-therapy3.png",
              alt: "image 1",
              width: 3840,
              height: 2560,
            },
            {
              src: "/images/shockmaster-therapy4.jpg",
              alt: "image 1",
              width: 3840,
              height: 2560,
            },
            {
              src: "/images/shockmaster-therapy5.png",
              alt: "image 1",
              width: 3840,
              height: 2560,
            },
          ]}
        />
      </div>
      <div className={styles.textWrapper}>
        <div className={styles.text}>
          <div className={styles.header}>
            <h1>Terapia Rázovou vlnou</h1>
            <div className={styles.button} onClick={() => setOpen(true)}>
              <img src="/icons/image.svg" alt="fotky" />
              <span style={{ margin: "0px 10px" }}>|</span> Galéria(5)
            </div>
          </div>
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
            Upozornenie: Nie je možné použiť rázovú vlnu v prípade tehotenstva,
            zníženej zrážanlivosť krvi, trombózy alebo u detí v období rastu.
            Výsledný efekt pacient pociťuje po pár týždňoch absolvovania
            terapie, teda je k nej potrebné pristupovať zodpovedne a zúčastniť
            sa jej pravidelne.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default RazovaVlna;
