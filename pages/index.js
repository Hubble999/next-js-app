import React from 'react';
import EventList from '../components/EventList/EventList.jsx';
import { getEvents } from '../utils.js';

const HomePage = ({ events }) => {
  return (
    <div>
      <EventList items={events} />
    </div>
  );
};

export async function getStaticProps() {
  const events = await getEvents();
  return {
    props: {
      events,
    },
    revalidate: 1800,
  };
}

export default HomePage;
