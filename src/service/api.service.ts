import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";
let apiClient: undefined | ApiService

class ApiService {
    private client: AxiosInstance
    constructor () {
        this.client = axios.create({
            baseURL: 'http://localhost:9000',
            timeout: 60000,
            headers: {
                "Content-Type": "application/json"
            }
        })
    }
    errorHandler (error: unknown) {
        if(error instanceof AxiosError) {
            
            console.error({ name: error.name, message: error.message, status: error.status })
        }
    }
    async get (url: string, config?: AxiosRequestConfig) {
        return await this.client.get(url, config)
    }
    async post (url: string, data:{ [key: string]: unknown }, config?: AxiosRequestConfig) {
        return await this.client.post(url, data, config)
    }
}


export default function createApiService () {
    if(!apiClient) {
        apiClient = new ApiService()
    }
    return apiClient
}