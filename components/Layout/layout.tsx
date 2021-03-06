import React from 'react';
import styles from './layout.module.css'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import utilStyles from '../../styles/utils.module.css'

const name = 'Typeworks'
export const siteTitle = 'Learning stuff'

export interface LayoutProps {
    children?: React.ReactNode;
    home?: boolean;
}

export default function Layout({ children, home }: LayoutProps) {
    return <div className={styles.container}>
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
                        src="/images/rick.jpg"
                        className={utilStyles.borderCircle}
                        height={144}
                        width={144}
                        alt={name}
                    />
                    <ul>
                        <li><Link href={'/'}><div className={utilStyles.link}>Home</div></Link></li>
                        <li><Link href={'/search'}><div className={utilStyles.link}>Search</div></Link></li>
                        <li><Link href={'/posts'}><div className={utilStyles.link}>Posts</div></Link></li>
                    </ul>
                    <h1 className={utilStyles.heading2Xl}>{name}</h1>
                </>
            ) : (
                <>
                    <Link href="/">
                        <a>
                            <Image
                                priority
                                src="/images/rick.jpg"
                                className={utilStyles.borderCircle}
                                height={108}
                                width={108}
                                alt={name}
                            />
                        </a>
                    </Link>
                    <h2 className={utilStyles.headingLg}>
                        <Link href="/">
                            <a className={utilStyles.colorInherit}>{name}</a>
                        </Link>
                    </h2>
                </>
            )}
        </header>
        <main>{children}</main>
        {!home && (
            <div className={styles.backToHome}>
                <Link href="/posts">
                    <a>??? Back to posts</a>
                </Link>
            </div>
        )}
    </div>
};
