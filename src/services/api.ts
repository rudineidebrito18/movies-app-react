import axios from "axios";
const apiUrl = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY;

function api(sub?: string) {
    return (
        axios.create({
            baseURL: `${apiUrl}${sub || ""}${sub ? '?' + apiKey : ""}`
        })
    )
}

export default api;