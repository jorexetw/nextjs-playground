import React from 'react';

interface MyCarProps {
    color: string;
    wheels?: number;
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
        const color = this.props.color;
        const wheels = this.props.wheels;

        return <div>My car is {color} and has {wheels} wheels</div>;
    }

}


/**
 * Functional implementation
 */
const MyCar: React.FC<MyCarProps> = (props) => {
    const color = props.color;
    const wheels = props.wheels;

    return <div>My car is {color} and has {wheels} wheels</div>;
}

export default MyCar;