import axios from "axios";
const apiUrl = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY;
const apiSearch = import.meta.env.VITE_SEARCH;

function api(sub?: string) {
    return (
        axios.create({
            baseURL: `${apiUrl}${sub || ""}${sub ? '?' + apiKey : ""}`
        })
    )
}

export function apiUseSearch(query: string) {
    return (
        axios.create({
            baseURL: `${apiSearch}?${apiKey}&query=${query}`
        })
    )
}

export default api;