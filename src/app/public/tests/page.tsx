// import { useState } from 'react';
// import Map from '@/components/Map/map-painel';
// import ReportList from '@/components/Report/report-list';
// // import styles from '../../../styles/Dashboard.module.css';

// export default function DashboardS() {
//   //the state where it will be defined which component will be displayed
//   const [showContent, setShowContent] = useState('showMap');

//   const handleClick = (btnLinkName: string) => {
//     setShowContent(btnLinkName);
//   };

//   return (
//     <>
//       <div className={styles.dashboard_container}>
//         <div className={styles.dashboard_links_container}>
//           <button
//             className={
//               showContent === 'showMap'
//                 ? styles.dashboard_link_item_active
//                 : styles.dashboard_link_item
//             }
//             onClick={() => handleClick('showMap')}
//           >
//             Mapa
//           </button>
//           <button
//             className={
//               showContent === 'showReportList'
//                 ? styles.dashboard_link_item_active
//                 : styles.dashboard_link_item
//             }
//             onClick={() => handleClick('showReportList')}
//           >
//             Chamados
//           </button>
//         </div>
//         <div className={styles.dashboard_result_container}>
//           {showContent === 'showMap' && (
//             <div className="dashboard_map_container">
//               <Map />
//             </div>
//           )}

//           {showContent === 'showReportList' && <ReportList />}
//         </div>
//       </div>
//     </>
//   );
// }
