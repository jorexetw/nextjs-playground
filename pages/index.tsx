import type { NextPage } from 'next'
import Layout from "../components/Layout/layout";
import MyCar from "../components/myCar";
import {useState} from "react";
import CarList from "../components/carList";
import {CarData} from "../models/carData";

const Home: NextPage = () => {
    const [myCar, setMyCar] = useState<CarData>();

  return (
      <Layout home>
          {myCar ? <MyCar car={myCar} /> : "I didn't pick any car"}
          <br />
          <CarList setMyCar={setMyCar} />
      </Layout>
  )
}

export default Home;
