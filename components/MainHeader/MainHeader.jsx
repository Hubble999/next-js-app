import Link from 'next/link';
import classes from './MainHeader.module.scss';

const MainHeader = ({ children }) => {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.logo}>
          <Link href='/'>PrettyEvents</Link>
        </div>
        <nav className={classes.navigation}>
          <ul className={classes.list}>
            <li>
              <Link href='/events'>Browse All Events</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
};

export default MainHeader;
