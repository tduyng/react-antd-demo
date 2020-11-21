import React, { useEffect, useState } from 'react';
import { Header } from 'src/components/Header';
import { Map } from 'src/components/Map';

const _Home = () => {
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
      <Header />
      <Map eventData={eventData} />
    </div>
  );
};

const Home = React.memo(_Home);
export default Home;
