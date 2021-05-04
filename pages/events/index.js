import React from 'react';
import { useRouter } from 'next/router';
import EventList from '../../components/EventList/EventList';
import EventSearch from '../../components/EventSearch/EventSearch';
import events from '../../data.js';

const Events = () => {
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

export default Events;
