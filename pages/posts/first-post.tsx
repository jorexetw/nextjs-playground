import React from 'react';
import Link from 'next/link';
import Profile from '../../components/Profile/profile';
import Head from 'next/head';
import Layout from "../../components/Layout/layout";

export interface FirstPostProps {}

const FirstPost: React.FC<FirstPostProps> = () => {
    return <Layout><Head>
        <title>First Post</title>
    </Head>
        <h1>First Post</h1>
        <Profile />
        <h2>
            <Link href="/">
                <a>Back to home</a>
            </Link>
        </h2>
    </Layout>
}

export default FirstPost;