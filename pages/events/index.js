import React from 'react';
import { useRouter } from 'next/router';
import EventList from '../../components/EventList/EventList';
import EventSearch from '../../components/EventSearch/EventSearch';
import { getEvents } from '../../utils/events.js';

const Events = ({ events }) => {
  const router = useRouter();
  const findEventsHandler = (year, month) => {
    router.push(`/events/${year}/${month}`);
  };

  return (
    <>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </>
  );
};

export async function getStaticProps() {
  const events = await getEvents();
  return {
    props: {
      events
    },
    revalidate: 100
  };
}

export default Events;
