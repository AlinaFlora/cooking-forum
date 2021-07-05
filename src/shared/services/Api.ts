import axios, { AxiosInstance } from 'axios'
import { config } from "../../config";
import paths from "../../config/paths";

class Api {
  public api: AxiosInstance

  constructor() {
    this.api = axios.create({ baseURL: config.API_URL })

    this.api.interceptors.response.use(
      response => {
        if ( response.status === 201) {
          alert("Success");
        }
        return response
      },
      error => {
        if (error.response.status === 401) {
          localStorage.clear()
          window.location.replace(paths.forum)
        } else {
          return Promise.reject(error)
        }
      }
    )

  }
}

export default Api
