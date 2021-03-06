import Image from 'next/image';
import AddressIcon from '../AddressIcon/AddressIcon';
import DateIcon from '../DateIcon/DateIcon';
import LogisticsItem from '../LogisticsItem/LogisticksItem';
import classes from './EventLogistics.module.scss';
import { makeReadableDate } from '../../utils/events.js';

const EventLogistics = (props) => {
  const { date, address, image, imageAlt } = props;

  const readableDate = makeReadableDate(date);
  const addressText = address.replace(', ', '\n');

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <Image src={`/${image}`} alt={imageAlt} width={160} height={160} />
      </div>
      <ul className={classes.list}>
        <LogisticsItem icon={DateIcon}>
          <time>{readableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
};

export default EventLogistics;
