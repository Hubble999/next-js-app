import Head from 'next/head';
import EventList from '../components/EventList/EventList.jsx';
import { getEvents } from '../utils.js';

const HomePage = ({ events }) => {
  return (
    <div>
      <Head>
        <title>Pretty Events</title>
        <meta name='description' content='find a lot of great events'/>
      </Head>
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
