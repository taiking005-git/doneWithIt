import { create } from 'apisauce'


const apiClient = create({
    baseURL: "http://192.168.7.3:9000"
})

export default apiClient;


//  http://172.16.24.96:5500
// "assetsBaseUrl": "http://172.16.24.96:9000/assets/",

