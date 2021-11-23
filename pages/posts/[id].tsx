import React from 'react';
import Layout from "../../components/Layout/layout";
import {getAllPostIds, getPostData} from "../../lib/posts";
import {GetStaticPaths, GetStaticProps} from "next";
import Post from "../../models/post";
import {ParsedUrlQuery} from "querystring";

export interface PostParams extends ParsedUrlQuery {
    id: string;
}

export interface PostProps {
    postData?: Post;
}

const Post: React.FC<PostProps> = ({postData}) => {
    return <Layout>
        {postData?.title}
        <br />
        {postData?.id}
        <br />
        {postData?.date}
        <br />
    </Layout>
}

export default Post;

export const getStaticProps: GetStaticProps<PostProps, PostParams> = async ({params}) => {
    const postData = params?.id ? getPostData(params?.id) : undefined;
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