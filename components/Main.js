import styles from '../styles/components/main.module.css';

export default function Main() {
  return (
    <main className={styles.content}>
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Motivações</h3>

        <article>
          <p className={styles.paragraph}>
            Acesso programático de informações é algo fundamental na comunicação
            entre sistemas mas, para nossa surpresa, uma informação tão útil e
            pública quanto um CEP não consegue ser acessada diretamente por um
            navegador por conta da API dos Correios não possuir CORS habilitado.
          </p>
          <p className={styles.paragraph}>
            Dado a isso, este projeto experimental tem como objetivo centralizar
            e disponibilizar endpoints modernos com baixíssima latência
            utilizando tecnologias como Vercel Smart CDN responsável por fazer o
            cache das informações em atualmente 23 regiões distribuídas ao longo
            do mundo (incluindo Brasil). Então, não importa o quão devagar for a
            fonte dos dados, nós queremos disponibilizá-la da forma mais rápida
            e moderna possível.
          </p>
        </article>
      </section>

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Recursos</h3>

        <div className={styles.resourcesWrapper}>
          <article className={styles.card}>
            <h4 className={styles.cardTitle}>CEP</h4>
            <p className={styles.paragraph}>
              Busca por CEP em múltiplos provedores.
            </p>
          </article>

          <article className={styles.card}>
            <h4 className={styles.cardTitle}>Bancos</h4>
            <p className={styles.paragraph}>
              Busca por dados dos bancos brasileiros, diretamente na base de
              dados do Bacen.
            </p>
          </article>

          <article className={styles.card}>
            <h4 className={styles.cardTitle}>DDD</h4>
            <p className={styles.paragraph}>
              Busca as cidades brasileiras referentes a um DDD.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
