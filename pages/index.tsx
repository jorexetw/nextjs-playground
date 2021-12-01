import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Layout, {siteTitle} from "../components/Layout/layout";
import utilStyles from "../styles/utils.module.css"
import Post from "../models/post";
import {getSortedPostsData} from "../lib/posts";
import Date from "../components/date";
import MyCar from "../components/myCar";
import {useState} from "react";
import CarList from "../components/carList";
import {CarData} from "../models/carData";

interface HomeProps {
    posts: Post[];
}

const Home: NextPage<HomeProps> = ({posts}) => {
    const [myCar, setMyCar] = useState<CarData>();

  return (
      <Layout home>
          {myCar ? <MyCar car={myCar} /> : "I didn't pick any car"}
          <br />
          <CarList setMyCar={setMyCar} />
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
