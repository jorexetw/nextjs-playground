import React from 'react';
import {CarData} from "../models/carData";

export interface CarProps {
    car: CarData;
    setMyCar: (car: CarData) => void;
}

const Car: React.FC<CarProps> = ({car, setMyCar}) => {
    return <div style={{borderColor: 'black', borderWidth: 1, borderStyle: 'solid'}}>
        <div>Name: {car.name}</div>
        <div>Color: {car.color}</div>
        <button onClick={() => setMyCar(car)}>Pick this car</button>
    </div>
}

export default Car;