import client from './client'

const endpoint = "/api/listings";

const getListings = () => client.get(endpoint);


export default {
    getListings,
}