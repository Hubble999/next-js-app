import Image from 'next/image';
import Button from '../Button/Button';
import DateIcon from '../DateIcon/DateIcon';
import AddressIcon from '../AddressIcon/AddressIcon';
import ArrowRightIcon from '../ArrowRightIcon/ArrowRightIcon';
import classes from './EventItem.module.scss';
import { makeReadableDate } from '../../utils/events.js';

function EventItem(props) {
  const { title, image, date, location, id } = props;

  const readableDate = makeReadableDate(date);
  const formattedAddress = location.replace(', ', '\n');
  const link = `/events/${id}`;

  return (
    <li className={classes.item}>
      <Image src={'/' + image} alt={title} width={340} height={160} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{readableDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={link}>
            <span>Explore Event</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
