import useDebounce from "./useDebounce";
import useApi from "./useApi";
import {PostManResponse} from "../pages/search";

export default function useDebounceApi<T>(apiUrl: string, timeout: number = 1000) {
    const debouncedSearch = useDebounce<string>(apiUrl, 1000)

    return useApi<PostManResponse>(debouncedSearch);
}