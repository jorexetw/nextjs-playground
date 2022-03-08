import {NextPage} from "next";
import Layout, {siteTitle} from "../../components/Layout/layout";
import Head from "next/head";
import utilStyles from "../../styles/utils.module.css";

const Search: NextPage = () => {
    return <Layout home>
        <Head>
            <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
            <p>Search</p>
        </section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        </section>
    </Layout>
}

export default Search;