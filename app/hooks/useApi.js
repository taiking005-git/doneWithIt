import {  useState } from "react"



export default useApi = (apiFn) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const request = async (...args) => {
        setLoading(true);
        const response = await apiFn(...args);
        setLoading(false);
        
        if (!response.ok)
            return setError(true);

        setError(false);
        setData(response.data)
    };

    return {request, loading, data, error }
}