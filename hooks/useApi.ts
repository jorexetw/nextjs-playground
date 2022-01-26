import {useEffect, useState} from "react";
import useMounted from "./useMounted";

export default function useApi<T>(apiUrl: string): [T | undefined, boolean, Error | undefined] {
    const mounted = useMounted();

    const [data, setData] = useState<T>();
    const [pending, setPending] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        fetch(apiUrl)
            .then(response => response.json())
            .then(carsData => {
                if (mounted) {
                    setPending(false);
                    setData(carsData);
                }
            })
            .catch((error) => {
                if (mounted) {
                    setError(error);
                }
            });
    }, [apiUrl, mounted]);

    return [data, pending, error];
}
