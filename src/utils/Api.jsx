import axios from 'axios'

// API_URL1 json-server(4000포트)
const api1 = axios.create({
    baseURL: process.env.REACT_APP_API_URL1,
    withCredentials: true,
})

const instance1 = axios.create({
    baseURL: process.env.REACT_APP_API_URL1,
    withCredentials: true,
})

// API_URL2 백엔드 배포 주소(.env 주소 수정)
const api2 = axios.create({
    baseURL: process.env.REACT_APP_API_URL2,
    headers: {
        Authorization: 'Token',
        'content-type': 'application/json',
    },
    withCredentials: true,
})

const instance2 = axios.create({
    baseURL: process.env.REACT_APP_API_URL2,
    withCredentials: true,
})
