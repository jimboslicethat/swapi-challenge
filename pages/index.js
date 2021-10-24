import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SWAPI Challenge</title>
        <meta name="description" content="A small react sandbox for playing around with the basics" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Hello, there, General Kenobi.</h1>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Planets &rarr;</h2>
            <p>Search characters by planet.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Characters &rarr;</h2>
            <p>Search for characters by attributes.</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Films &rarr;</h2>
            <p>Get info by name, number, or date.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Vehicles &rarr;</h2>
            <p>Vroom vroom, beep beep.</p>
          </a>
        </div>
      </main>
    </div>
  )
}
