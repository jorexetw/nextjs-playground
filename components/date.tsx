import React from "react";
import {format, parseISO} from 'date-fns';

interface DateProps {
    dateString: string;
}

const Date: React.FC<DateProps> = ({dateString}) => {
    return <time dateTime={dateString}>{format(parseISO(dateString), 'LLLL d, yyyy')}</time>
}

export default Date