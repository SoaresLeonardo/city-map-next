'use client';

import Map from '@/components/Map/map-painel';
import { useState } from 'react';
import styles from '../../../styles/Dashboard.module.css';

export default function Dashboard() {
  //the state where it will be defined which component will be displayed
  const [showContent, setShowContent] = useState('showMap');

  const handleClick = (btnName: string) => {
    setShowContent(btnName);
  };

  return (
    <div className={styles.dashboard_container}>
      <div className={styles.dashboard_links_container}>
        <button
          className={
            showContent === 'showMap'
              ? styles.dashboard_button_item_active
              : styles.dashboard_button_item
          }
          onClick={() => handleClick('showMap')}
        >
          Mapa
        </button>
        <button
          className={
            showContent === 'showReportList'
              ? styles.dashboard_button_item_active
              : styles.dashboard_button_item
          }
          onClick={() => handleClick('showReportList')}
        >
          Chamados
        </button>
      </div>
      <div className={styles.dashboard_result_container}>
        {showContent === 'showMap' && (
          <div className="dashboard_map_result">
            <div>
              <Map />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
{
  /* <div style={{ height: '100%' }}>
<Map />
</div> */
}
