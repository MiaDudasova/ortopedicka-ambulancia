import styles from "./styles/Footer.module.scss"

const Footer = () => {
    return (
      <div className={styles.wrapper}>
        ORTOTICKÉ CENTRUM {new Date().getFullYear()}
      </div>
    );
}

export default Footer