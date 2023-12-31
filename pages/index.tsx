import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>0xSupply</title>
                <meta name="description" content="0xSupply" />
                <link rel="icon" href="/favicon.ico" />
            </Head>



            <main className={styles.main}>
                <h1 className={styles.title}>
                    0xSupply
                </h1>


            </main>

            <footer className={styles.footer}>

            </footer>
        </div>
    )
}

export default Home
