import client from './client'

const endpoint = "/api/listings";

const getListings = () => client.get(endpoint);

const addListings = async (listing, onUploadProgress) => {
    const data = new FormData();
    data.append("title", listing.title)
    data.append("price", listing.price)
    data.append("categoryId", listing.categories.value)
    data.append("description", listing.description)

    listing.images.forEach((image, index) => {
        data.append("images", {
            name: "image" + index,
            type: 'image/jpeg',
            uri: image
        })
    });
    if (listing.location)
        data.append("location", JSON.stringify(listing.location));
    
    const headers = {
        'Content-Type': 'multipart/form-data',
    };

    return client.post(endpoint, data,
        {
            headers,
            onUploadProgress: progress => onUploadProgress(progress.loaded / progress.total)
        });
}

export default {
    addListings,
    getListings
}