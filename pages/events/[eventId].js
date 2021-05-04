import { useRouter } from 'next/router';

import events from '../../data.js';
import EventSummary from '../../components/EventSummary/EventSummary';
import EventLogistics from '../../components/EventLogistics/EventLogistics';
import EventContent from '../../components/EventContent/EventContent';

const EventDetailPage = () => {
  const router = useRouter();

  const eventId = router.query.eventId;
  const event = events.filter((event) => event.id === eventId)[0];

  if (!event) {
    return <p>No event found!</p>;
  }

  return (
    <>
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

export default EventDetailPage;
