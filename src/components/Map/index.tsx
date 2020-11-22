import React, { useState } from 'react';
import 'src/assets/scss/map.scss';
import GoogleMapReact from 'google-map-react';
import { LocationMarker } from './LocationMarker';
import { LocationInfoBox } from './LocationInfoBox';

interface EventType {
  id: string;
  title: string;
  categories: {
    id: number;
  };
  geometries: {
    coordinates: [number, number];
  };
}

const initialState = {
  id: '',
  title: '',
};
const Map = (props: {
  eventData: EventType[];
  center: number;
  zoom: number;
}) => {
  const [locationInfo, setLocationInfo] = useState(initialState);
  const { eventData, center, zoom } = props;

  const markers = eventData.map((ev: EventType) => {
    if (ev.categories[0].id === 8) {
      return (
        <LocationMarker
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
          onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
        />
      );
    }
    return null;
  });

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GGMap_Key }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
      {locationInfo && <LocationInfoBox info={locationInfo} />}
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.8756,
  },
  zoom: 6,
};

export { Map };
