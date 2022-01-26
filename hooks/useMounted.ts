import {useEffect, useState} from "react";

export default function useMounted() {
    const [mounted, setMounted] = useState(true);

    useEffect(() => {
        return () => setMounted(false);
    }, [])

    return mounted;
}