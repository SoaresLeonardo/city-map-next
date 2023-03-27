import UseMap from './hooks/use-map-api';

export default function Map() {
  return (
    <>
      <h1>Aqui está seu mapa</h1>
      <div style={{ width: '70vw', height: '70vh' }}>
        <UseMap />
      </div>
    </>
  );
}
