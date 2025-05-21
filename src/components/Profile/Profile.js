import ProfileImage from '../ProfileImage/ProfileImage';
import styles from './Profile.module.css';

export default function Profile() {
  return (
    <div className={styles.main}>
      <section className={styles.profile}>
        <ProfileImage imageURL="./images/image-jeremy.png" />
        <div className={styles.data}>
          <div className={styles.label}>Report for</div>
          <div className={styles.name}>Jeremy Robson</div>
        </div>
      </section>
      <div className={`${styles.unselected} ${styles.option}`}>Daily</div>
      <div className={`${styles.selected} ${styles.option}`}>Weekly</div>
      <div className={`${styles.unselected} ${styles.option}`}>Monthly</div>
    </div>
  )
}