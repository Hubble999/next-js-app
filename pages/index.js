import React from 'react';
import events from '../data.js';
import EventList from '../components/EventList/EventList.jsx';

const HomePage = () => {
  return (
    <div>
      <EventList items={events} />
    </div>
  );
};

export default HomePage;
