import styles from './ProfileImage.module.css';

export default function ProfileImage({ imageURL }) {
  return (
    <img src={imageURL} className={styles.image} />
  )
}