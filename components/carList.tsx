import React, {useEffect, useState} from "react";
import Car from "./car";
import {CarData} from "../models/carData";
import useApi from "../hooks/useApi";

export interface CarListProps {
    setMyCar: (car: CarData) => void;
}

const CarList: React.FC<CarListProps> = ({setMyCar}) => {
    const [page, setPage] = useState(0);

    const [cars, pending, error] = useApi<CarData[]>(`https://61a788d8387ab200171d2d88.mockapi.io/api/v1/cars?page=${page}`);

    return <div>{(cars || []).map(car => (<Car key={car.id} car={car} setMyCar={setMyCar} />))}</div>
}

export default CarList;
