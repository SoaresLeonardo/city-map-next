import UseMap from './hooks/use-map-api';

import styles from '../../styles/Map.module.css';

export default function Map() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <UseMap />
        </div>
      </div>
    </>
  );
}
