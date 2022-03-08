import {NextPage} from "next";
import Layout, {siteTitle} from "../../components/Layout/layout";
import Head from "next/head";
import utilStyles from "../../styles/utils.module.css";
import useApi from "../../hooks/useApi";
import {useState} from "react";
import useDebounce from "../../hooks/useDebounce";
import useDebounceApi from "../../hooks/useDebouncedApi";

export interface PostManResponse {
    args: {
        search: string
    }
}

const Search: NextPage = () => {
    const [search, setSearch] = useState<string>('')
    const [response] = useDebounceApi<PostManResponse>(`https://www.postman-echo.com/get?search=${search}`, 500);

    return <Layout home>
        <Head>
            <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
            <p>Search</p>
        </section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        </section>
        <input value={search} onChange={(e) => setSearch(e.target.value)}/>
        <div>Result: {response?.args.search}</div>
    </Layout>
}

export default Search;