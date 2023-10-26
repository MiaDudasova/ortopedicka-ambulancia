"use client";
import Head from "next/head";
import { useState } from "react";
import styles from "../layout/styles/Header.module.scss";
import Link from "next/link";

const Header = ({ setCennikOpened } : any) => {
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
          <div className={styles.logoWrapper}>
            <Link href="#ortopedicka-ambulancia" className={styles.domov}>
              <img
                src="./icons/logos.png"
                alt="Logo Ortotické centrum"
                className={styles.logo}
                onClick={() => setIsOpen(false)}
              />
              <span className={styles.ortopedickaAmbulancia}>
                Ortopedická ambulancia
              </span>
            </Link>
          </div>
        </div>

        <div className={styles.navbar}>
          <div className={`${styles.navbarItems} ${isOpen ? styles.open : ""}`}>
            <li>
              <Link
                href="#razova-vlna"
                className={styles.navbarItem}
                onClick={() => setIsOpen(false)}
              >
                Rázová vlna
              </Link>
            </li>
            <li className={styles.navbarItem}>
              <div
                // href="/files/CENNIK_AMBULANCIA_Šamorín.pdf"
                className={styles.navbarItemLink}
                // target="_blank"
                onClick={() => {
                  setCennikOpened(true);
                  setIsOpen(false);
                }}
              >
                Cenník
              </div>
            </li>
            <li>
              <Link
                href="#kontakty"
                className={styles.navbarItem}
                onClick={() => setIsOpen(false)}
              >
                Kontakty
              </Link>
            </li>
          </div>
          {isOpen ? (
            <img
              src="./icons/menu-x.svg"
              alt="Menu"
              id="menu-icon"
              className={styles.menuIcon}
              onClick={toggleMenu}
            />
          ) : (
            <img
              src="./icons/menu.png"
              alt="Menu"
              id="menu-icon"
              className={styles.menuIcon}
              onClick={toggleMenu}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Header;

function useClient() {
}
