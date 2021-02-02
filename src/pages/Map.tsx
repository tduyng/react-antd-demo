import React, { useEffect, useState } from 'react';
import { Header } from 'src/components/Map/MapHeader';
import { Map } from 'src/components/Map';
import { Helmet } from 'react-helmet';

const _MapPage = () => {
  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await fetch(
        'https://eonet.sci.gsfc.nasa.gov/api/v2.1/events',
      );
      const { events } = await res.json();
      setEventData(events);
    };
    fetchEvents();
  }, []);

  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>Map | React Antd Demo</title>
        <meta name="description" content="Google map React demo" />
      </Helmet>

      <Header />
      <Map eventData={eventData} />
    </div>
  );
};

const MapPage = React.memo(_MapPage);
export default MapPage;
