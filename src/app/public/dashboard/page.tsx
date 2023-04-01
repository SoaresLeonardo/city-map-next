'use client';

import { useState } from 'react';
import Map from '@/components/Map/map-painel';
import styles from '../../../styles/Dashboard.module.css';

export default function Dashboard() {
  // the state where it will be defined which component will be displayed
  const [showContent, setShowContent] = useState('showMap');

  return (
    <div className={styles.dashboard_container}>
      <div className={styles.dashboard_buttons_contents}>
        <button
          className={
            showContent === 'showMap'
              ? styles.dashboard_button_item_active
              : styles.dashboard_button_item
          }
          onClick={() => setShowContent('showMap')}
        >
          Meu mapa
        </button>
        <button
          className={
            showContent === 'showReports'
              ? styles.dashboard_button_item_active
              : styles.dashboard_button_item
          }
          onClick={() => setShowContent('showReports')}
        >
          Chamados
        </button>
      </div>
      <div className={styles.dashboard_result_container}>
        {showContent === 'showMap' && (
          <div className={styles.dashboard_map_result}>
            <div className={styles.map}>
              <Map />
            </div>
            <div className={styles.map_menu}>
              {/* <div>
                <RiZzzFill size={60} />
              </div> */}
              <div className={styles.map_menu_introduction}>
                <h1>Mapa de luiziânia</h1>
                <span>Rua: Sen Luiz Piza</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
