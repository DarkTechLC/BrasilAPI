import Link from 'next/link';

import styles from '../styles/components/header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        Vamos transformar o <span className={styles.greenText}>Brasil</span> em
        uma <span className={styles.greenText}>A</span>
        <span className={styles.blueText}>P</span>
        <span className={styles.yellowText}>I</span>?
      </h1>

      <h2 className={styles.subtitle}>
        Acesso rápido e estruturado a informações
      </h2>

      <div className={styles.linksGroup}>
        <Link href="/docs">
          <a className={[styles.linkButton, styles.linkButtonGreen].join(' ')}>
            Documentação
          </a>
        </Link>

        <a
          href="https://github.com/BrasilAPI/BrasilAPI"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.linkButton}
        >
          Contribuir
        </a>
      </div>
    </header>
  );
}
