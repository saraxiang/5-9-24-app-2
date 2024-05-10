import Link from 'next/link';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/" passHref>
            <a className={styles.navLink}>Play Game</a>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/leaderboard" passHref>
            <a className={styles.navLink}>Leaderboard</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
