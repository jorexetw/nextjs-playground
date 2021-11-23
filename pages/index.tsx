import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Layout, {siteTitle} from "../components/Layout/layout";
import utilStyles from "../styles/utils.module.css"
import Post from "../models/post";
import {getSortedPostsData} from "../lib/posts";

interface HomeProps {
    posts: Post[];
}

const Home: NextPage<HomeProps> = ({posts}) => {
  return (
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>Holiis!</p>
          <p>
            (This is a sample website - you’ll be building a site like this on{' '}
            <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
          </p>
        </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
              {posts.map(({ id, date, title }) => (
                  <li className={utilStyles.listItem} key={id}>
                      {title}
                      <br />
                      {id}
                      <br />
                      {date}
                  </li>
              ))}
          </ul>
      </section>
      </Layout>
  )
}

export async function getStaticProps() {
    const posts = getSortedPostsData();
    return {
        props: {
            posts
        }
    }
}

export default Home
