import React from 'react';
import Layout from "../../components/Layout/layout";
import {getAllPostIds, getPostData} from "../../lib/posts";
import {GetStaticPaths, GetStaticProps} from "next";
import Post from "../../models/post";
import {ParsedUrlQuery} from "querystring";
import Head from 'next/head';
import Date from "../../components/date";
import utilStyles from '../../styles/utils.module.css';

export interface PostParams extends ParsedUrlQuery {
    id: string;
}

export interface PostProps {
    postData: Post;
}

const Post: React.FC<PostProps> = ({postData}) => {
    return <Layout>
        <Head>
            <title>{postData.title}</title>
        </Head>
        <article>
            <h1 className={utilStyles.headingXl}>{postData.title}</h1>
            <div className={utilStyles.lightText}>
                <Date dateString={postData.date} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml || ''}} />
        </article>
    </Layout>
}

export default Post;

export const getStaticProps: GetStaticProps<PostProps, PostParams> = async ({params}) => {
    if (!params?.id) {
        throw new Error("Invalid id");
    }
    const postData = await getPostData(params.id);
    return {
        props: {
            postData
        }
    }
}

export const getStaticPaths: GetStaticPaths = () => {
    const paths = getAllPostIds().map(id => ({params: {id}}))
    return {
        paths,
        fallback: false
    }
}