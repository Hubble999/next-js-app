import classes from './EventContent.module.scss';

const EventContent = (props) => {
  return (
    <section className={classes.content}>
      {props.children}
    </section>
  );
}

export default EventContent;