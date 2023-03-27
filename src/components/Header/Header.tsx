import Title from '../Title';
import styles from './Header.module.css';

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <Title title="Dashboard" />
      </header>
    </>
  );
}
