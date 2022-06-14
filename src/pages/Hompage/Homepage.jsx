import styles from "./Homepage.module.css";
import data from "../../data.json";
export default function Homepage() {
  return (
    <main className={styles.main}>
      <div className={styles.gallery}>
        {data.map((img, idx) => {
          return (
            <div className={styles.thumbnail} key={idx}>
              <img
                className={styles.galleryImg}
                src={img.images.thumbnail}
                alt={img.name}
              />
            </div>
          );
        })}
      </div>
    </main>
  );
}
