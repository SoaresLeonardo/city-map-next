import styles from './Header.module.css';
import { MdSpaceDashboard } from 'react-icons/md';

export default function Header() {
  return (
    <header className={styles.header_container}>
      <div className={styles.header_title}>
        <MdSpaceDashboard size={35} style={{ marginRight: '10px' }} />
        <h2>Painel</h2>
      </div>
    </header>
  );
}
