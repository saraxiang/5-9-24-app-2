import Link from 'next/link';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/" className={styles.navLink}>
            Play Game
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/leaderboard" className={styles.navLink}>
            Leaderboard
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
