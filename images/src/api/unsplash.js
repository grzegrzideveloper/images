import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID K406Q4HwFhsU75PuBXD0p8QcA9YOudPpmBKTI0IMgwI'
    }  
});