import styles from "./Card.module.css";

export default function Card() {
  return (
    <div className={styles.orange_background}>
      <img src="./images/icon-work.svg" className={styles.icon} />
      <div className={styles.content}>
        <header className={styles.header}>
          <div className={styles.header_title}>Work</div>
          <img className={styles.more_button} src="./images/icon-ellipsis.svg" />
        </header>
        <div className={styles.content}>
          <div className={styles.hours}>
            32hrs
          </div>
          <div className={styles.last_hours}>
            Last word - 36hrs
          </div>
        </div>
      </div>
    </div>
  )
}