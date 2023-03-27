import styles from './Nav.module.css';
import Image from 'next/image';
import dashboardLogo from '../../../public/dashboard.png';

export default function Navbar() {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbar__logo}>
          <Image
            style={{ width: '25px', height: '25px' }}
            src={dashboardLogo}
            alt="dashboard logo"
          />
        </div>
        <div className={styles.navbar__links}>
          <a href="#">Dashboard</a>
          <a href="#">Chamados</a>
        </div>
      </nav>
    </>
  );
}
