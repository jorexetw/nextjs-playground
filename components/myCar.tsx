import React from 'react';
import {CarData} from "../models/carData";

interface MyCarProps {
    car: CarData;
}

/**
 * Old implementation of component
 */
class MyCarComponent extends React.Component<MyCarProps> {

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        const color = '';
        const wheels = '';

        return <div>My car is {color} and has {wheels} wheels</div>;
    }

}


/**
 * Functional implementation
 */
const MyCar: React.FC<MyCarProps> = ({car}) => {
    return <div>My car is a {car.name} and it is {car.color}. Id: {car.id}</div>;
}

export default MyCar;