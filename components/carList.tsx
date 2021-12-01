import React, {useEffect, useState} from "react";
import Car from "./car";
import {CarData} from "../models/carData";

export interface CarListProps {
    setMyCar: (car: CarData) => void;
}

const CarList: React.FC<CarListProps> = ({setMyCar}) => {
    const [cars, setCars] = useState<CarData[]>([]);

    useEffect(() => {
        fetch(`https://61a788d8387ab200171d2d88.mockapi.io/api/v1/cars`)
            .then(response => response.json())
            .then(carsData => {
                setCars(carsData);
            });
    }, [])

    return <div>{cars.map(car => (<Car key={car.id} car={car} setMyCar={setMyCar} />))}</div>
}

export default CarList;