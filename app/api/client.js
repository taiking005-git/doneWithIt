import { create } from 'apisauce';
import cache from '../utility/cache'



const apiClient = create({
    baseURL: "http://192.168.7.2:9000"
})

const get = apiClient.get;

apiClient.get = async (url, params, axiosConfig) => {
    const response = await get(url, params, axiosConfig);

    if (response.ok) {
        cache.storeData(url, response.data);
        return response;
    }

    const data = await cache.getData(url);

    return data ? { ok: true, data } : response;
}

export default apiClient;


