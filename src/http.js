import axios from "axios";

export const textApi = axios.create({
    baseURL: 'http://localhost:8000/api'
});

// textApi.get('/text-content')
//     .then(res => {
//         export const Text = res.data;
//     }).catch((err) => {
//         console.log(err);
//         return;
//     });

export const formApi = axios.create({
    baseURL: 'http://localhost:8000/api'
});