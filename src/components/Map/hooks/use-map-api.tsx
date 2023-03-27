import { IMarkPosition } from '@/app/types/map-marker-position';
import { useJsApiLoader, GoogleMap } from '@react-google-maps/api';

export default function UseMap() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-maps-script',
    googleMapsApiKey: '' //my API Key
  });

  // application fixed city(Luiziânia) position;
  const fixedMarkerPosition: IMarkPosition = {
    lat: -21.6736,
    lng: -50.3238
  };

  const mapContainerStyle = {
    width: '100%',
    height: '100%'
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={fixedMarkerPosition}
      zoom={52}
    >
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}
