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
import MyCar from "../components/car";
import {useState} from "react";

interface HomeProps {
    posts: Post[];
}

const internalState = {
    color: 'blue',
    wheels: '1',
}

const Home: NextPage<HomeProps> = ({posts}) => {
    const [color, setColor] = useState('blue');
    const [wheels, setWheels] = useState(0);

    const changeColor = () => {
        setColor('red');
    }

    const addWheel = () => {
        setWheels(wheels + 1);
    }

    const removeWheel = () => {
        setWheels(wheels - 1);
    }

  return (
      <Layout home>
          <button onClick={changeColor}>Color switch</button>
          <button onClick={addWheel}>Add wheel</button>
          <button onClick={removeWheel}>Remove wheel</button>
          <MyCar color={color} wheels={wheels} />
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
