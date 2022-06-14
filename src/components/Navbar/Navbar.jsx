import styles from "./Navbar.module.css";
export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <img src="/assets/shared/logo.svg" alt="galleria" />
      <button className="link--1 btn">start slideshow</button>
    </nav>
  );
}
