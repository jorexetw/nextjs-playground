import React from 'react';

interface MyCarProps {
    color: string;
    wheels?: number;
}

const MyCar: React.FC<MyCarProps> = (props) => {
    const color = props.color;
    const wheels = props.wheels;

    return <div>My car is {color} and has {wheels} wheels</div>;
}

export default MyCar;