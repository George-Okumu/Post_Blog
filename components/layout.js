import styles from './layout.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'



const name = 'George'
export const siteTitle = 'My First Next Blog'

export default function Layout({ children, home }){
return (    <div className={styles.container}>
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="description"
        content="Learn how to build a personal website using Next.js"
      />
      <meta
        property="og:image"
        content={`https://og-image.vercel.app/${encodeURI(
          siteTitle
        )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
      />
      <meta name="og:title" content={siteTitle} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
    <header className={styles.header}>
      {home ? (
        <>
          <Image
            priority
            src="/images/profile.jpg"
            className={styles.borderCircle}
            height={144}
            width={144}
            alt={name}
          />
          <h1 className={styles.heading2Xl}>{name}</h1>
        </>
      ) : (
        <>
            <a>
              <Image
                priority
                src="/images/geoface.jpg"
                className={styles.borderCircle}
                height={108}
                width={108}
                alt={name}
              />
            </a>
          <h2 className={styles.headingLg}>
              <a className={styles.colorInherit}>{name}</a>
            
          </h2>
        </>
      )}
    </header>
    <main>{children}</main>

  </div>
)   
}