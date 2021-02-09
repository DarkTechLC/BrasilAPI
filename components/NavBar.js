import Link from 'next/link';
import { FaSlack as SlackIcon, FaGithub as GithubIcon } from 'react-icons/fa';

import styles from '../styles/components/navbar.module.css';

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.wrapper}>
        <Link href="/">
          <a>
            <img
              src="/brasilapi-logo-medium.png"
              alt="Brasil API"
              className={styles.logo}
            />
          </a>
        </Link>

        <div className={styles.leftGroup}>
          <ul className={styles.linkList}>
            <li className={styles.linkListItem}>
              <Link href="/docs">
                <a>Docs</a>
              </Link>
            </li>
          </ul>

          <ul className={[styles.linkList, styles.socialLinks].join(' ')}>
            <li className={styles.linkListItem}>
              <a
                href="https://brasilapi.slack.com/join/shared_invite/zt-l12s2b8k-r0SHGZV4YZSMfrzhydn8WA#/"
                target="_blank"
                rel="noopener noreferrer"
                title="Canal do projeto no Slack"
              >
                <SlackIcon size={24} />
              </a>
            </li>

            <li className={styles.linkListItem}>
              <a
                href="https://github.com/BrasilAPI/BrasilAPI"
                target="_blank"
                rel="noopener noreferrer"
                title="Repositório do projeto no Github"
              >
                <GithubIcon size={24} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
