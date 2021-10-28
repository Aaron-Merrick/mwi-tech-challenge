import axios from "axios";

export const textApi = axios.create({
    baseURL: 'http://localhost:8000/api'
});

export const formApi = axios.create({
    baseURL: 'http://localhost:8000/api'
});