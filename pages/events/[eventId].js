import Head from 'next/head';
import EventSummary from '../../components/EventSummary/EventSummary';
import EventLogistics from '../../components/EventLogistics/EventLogistics';
import EventContent from '../../components/EventContent/EventContent';
import { getEventById, getEvents } from '../../utils.js';

const EventDetailPage = ({ event }) => {
  if (!event) {
    return <p>No event found!</p>;
  }

  return (
    <>
      <Head>
        <title>{event.title}</title>
        <meta name='description' content={event.description} />
      </Head>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
};

export async function getStaticProps({ params }) {
  const event = await getEventById(params.eventId);
  return {
    props: {
      event,
    },
    revalidate: 100,
  };
}

export async function getStaticPaths() {
  const events = await getEvents();
  const eventsId = events.map(({ id }) => ({ params: { eventId: id } }));
  return {
    paths: eventsId,
    fallback: true,
  };
}

export default EventDetailPage;
