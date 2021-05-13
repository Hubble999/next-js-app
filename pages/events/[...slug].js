import React from 'react';
import { useRouter } from 'next/router';
import events from '../../data';
import EventList from '../../components/EventList/EventList';
import Button from '../../components/Button/Button';
import { getFilteredEvents } from '../../utils.js';

const FilteredEventsPage = ({ filteredEvents }) => {
  console.log(filteredEvents)
  if (!filteredEvents) {
    return <h2>Loading...</h2>;
  }

  return filteredEvents.length === 0 ? (
    <div>
      <h2>No events found</h2>
      <Button link={'/events'}>Go back</Button>
    </div>
  ) : (
    <div>
      <EventList items={filteredEvents} />
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const [year, month] = params.slug;
  const filteredEvents = await getFilteredEvents(year, month);
  return {
    props: {
      filteredEvents,
    },
  };
}

export default FilteredEventsPage;
