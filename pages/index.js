import Head from 'next/head'
import Link from 'next/link'

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
          <Link href="/planets">
            <a className={styles.card}>
              <h2>Planets &rarr;</h2>
              <p>Search characters by planet.</p>
            </a>
          </Link>

          <Link href="/characters">
            <a className={styles.card}>
              <h2>Characters &rarr;</h2>
              <p>Search for characters by attributes.</p>
            </a>
          </Link>

          <Link href="/films">
            <a className={styles.card}>
              <h2>Films &rarr;</h2>
              <p>Get info by name, number, or date.</p>
            </a>
          </Link>

          <Link href="/vehicles">
            <a className={styles.card}>
              <h2>Vehicles &rarr;</h2>
              <p>Vroom vroom, beep beep.</p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  )
}
