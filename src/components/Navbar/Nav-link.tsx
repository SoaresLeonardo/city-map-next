import Link from 'next/link';
import styles from '../../styles/Nav.module.css';

export default function Navbar() {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbar__logo}>Logo</div>
        <div className={styles.navbar__links}>
          <Link href="/public/dashboard">Home</Link>
          <a href="#">Chamados</a>
        </div>
      </nav>
    </>
  );
}
