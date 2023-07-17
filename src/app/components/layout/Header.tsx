"use client";
import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "../layout/styles/Header.module.scss";

const Header = () => {
  useClient();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/boxicons@2.0.7/css/boxicons.min.css"
        />
      </Head>

      <div className={styles.wrapper}>
        <div className={styles.left}>
          {/* <span>www.ortopedsamorin.sk</span> */}
          <div className={styles.logoWrapper}>
            <img
              src="./logos.png"
              alt="Logo Ortotické centrum"
              className={styles.logo}
            />
            <span className={styles.ortopedickaAmbulancia}>
              Ortopedická ambulancia
            </span>
          </div>
        </div>

        <div className={styles.navbar}>
          <div className={`${styles.navbarItems} ${isOpen ? styles.open : ""}`}>
            <li className={styles.navbarItem}>Rázová vlna</li>
            <li className={styles.navbarItem}>
              <a
                href="https://ortopedsamorin.sk/CENNIK_AMBULANCIA_Šamorín.pdf"
                className={styles.navbarItemLink}
              >
                Cenník
              </a>
            </li>
            <li className={styles.navbarItem}>Kontakt</li>
          </div>
          <img
            src="./menu.png"
            alt="Menu"
            id="menu-icon"
            className={styles.menuIcon}
            onClick={toggleMenu}
          />
        </div>
      </div>
    </>
  );
};

export default Header;

function useClient() {
  console.log(".");
}
