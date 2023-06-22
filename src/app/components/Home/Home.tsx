import styles from "./styles/Home.module.scss";

const Home = () => {
  return (
    <div className={styles.ortopedickaAmbulancia}>
      <div className={styles.socialsWrapper}>
        <div className={styles.socials}>
          <a
            href="https://www.facebook.com/ortotickecentrum.sk/?locale=sk_SK"
            target="_blank"
          >
            <img
              src="./facebook.svg"
              alt="Facebook Ortotické centrum"
              className={styles.social}
            />
          </a>
          <a
            href="http://ortotickecentrum.sk/"
            target="_blank"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <img
              src="./web.svg"
              alt="Websránka Ortotické centrum"
              className={styles.social}
              style={{ width: "70%", margin: "0px auto" }}
            />
          </a>
        </div>
      </div>
      <div className={styles.imageWrapper}>
        <img src="./ambulancia.jpg" alt="Ambulancia" className={styles.image} />
      </div>
      <div className={styles.textWrapper}>
        <div className={styles.text}>
          <h1>Ortopedická amulancia pre deti a dospelých</h1>
          <h4>
            V priestoroch nášho centra Vám bude k dispozícii ortopedická
            ambulancia pre deti aj dospelých.
          </h4>
          <h4>
            Ortopedická ambulancia je zameraná na diagnostiku a liečbu chorôb
            pohybového aparátu.
          </h4>
          <div>
            <ul>
              <li>
                <span className={styles.novinka}>
                  !!!! Aplikácia krvnej plazmy ACP !!!! NOVINKA
                </span>
              </li>
              <li>Diagnostika chodidiel detí a dospelých</li>
              <li>Obmedzenie pohyblivosti</li>
              <li>Bolesti chrbta a kĺbov</li>
              <li>Deformácie a skrátenia končatín</li>
              <li>Poúrazová a pooperačná ambulantná starostlivosť</li>
              <li>Terapia detí s DMO a inými neuromuskulárnymi ochoreniami</li>
            </ul>
          </div>
          <div className={styles.contactsWrapper}>
            <h3>OHĽADOM TERMÍNU A POPLATKU SA INFORMUJTE !</h3>
            <span className={styles.contacts}>Tel.:</span> 0908 446 496 <br />
            <span className={styles.contacts}>Cenník:</span>{" "}
            <a
              href="https://ortopedsamorin.sk/CENNIK_AMBULANCIA_Šamorín.pdf"
              className={styles.cennik}
            >
              CENNÍK_AMBULANCIA_Šamorín
            </a>{" "}
            <br />
            <span className={styles.contacts}>E-mail:</span>{" "}
            <a href="mailto: info@ortotickecentrum.sk" target="_blank">
              info@ortotickecentrum.sk
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
