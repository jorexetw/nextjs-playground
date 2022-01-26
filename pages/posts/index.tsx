import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Layout, {siteTitle} from "../../components/Layout/layout";
import utilStyles from "../../styles/utils.module.css"
import Post from "../../models/post";
import {getSortedPostsData} from "../../lib/posts";
import Date from "../../components/date";

interface HomeProps {
    posts: Post[];
}

const Posts: NextPage<HomeProps> = ({posts}) => {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>Random Thoughts</p>
            </section>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {posts.map(({ id, date, title }) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`/posts/${id}`}>
                                <a>{title}</a>
                            </Link>
                            <br />
                            <small className={utilStyles.lightText}>
                                <Date dateString={date} />
                            </small>
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

export default Posts