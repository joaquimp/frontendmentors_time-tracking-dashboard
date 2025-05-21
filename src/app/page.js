import Profile from "@/components/Profile/Profile";
import styles from "./page.module.css";
import Card from "@/components/Card/Card";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <Profile />
        <section className={styles.cards}>
          <div className={styles.cards_line}>
            <Card /> <Card /> <Card />
          </div>
          <div className={styles.cards_line}>
            <Card /> <Card /> <Card />
          </div>
        </section>
      </div>
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="#">Your Name Here</a>.
      </div>
    </main>
  );
}
