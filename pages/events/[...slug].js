import Head from 'next/head';
import EventList from '../../components/EventList/EventList';
import Button from '../../components/Button/Button';
import { getFilteredEvents } from '../../utils/events.js';

function FilteredEventsPage({ filteredEvents }) {
  if (!filteredEvents) {
    return <h2>Loading...</h2>;
  }
  const style = {
    display: 'flex',
    'flex-direction': 'column',
    'align-items': 'center'
  };
  return filteredEvents.length === 0 ? (
    <div style={style}>
      <h2>No events found</h2>
      <Button link={'/events'}>Go back</Button>
    </div>
  ) : (
    <div>
      <Head>
        <title>Filtered events</title>
        <meta name="description" content="filtered events by year and month" />
      </Head>
      <EventList items={filteredEvents} />
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const [year, month] = params.slug;
  const filteredEvents = await getFilteredEvents(year, month);
  return {
    props: {
      filteredEvents
    }
  };
}

export default FilteredEventsPage;
