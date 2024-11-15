import  axios, { AxiosInstance }  from "axios"

const clienteHttp: AxiosInstance = axios.create({
    baseURL:  "http://localhost/8080/"
})

export default clienteHttp