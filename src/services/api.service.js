import axios from 'axios'

class ErrorService extends Error {
  constructor (errorType, errorCode, message) {
    super(message)
    this.name = this.constructor.name
    this.message = message
    this.errorType = errorType
    this.errorCode = errorCode
  }
}

const ApiService = {
  _401interceptor: null,
  _reqInterceptor: null,

  init (baseURL) {
    axios.defaults.baseURL = baseURL
  },

  setHeader () {
    axios.defaults.headers.common['Content-Type'] = 'application/json'
    axios.defaults.headers.common['Accept'] = 'application/json'
  },

  removeHeader () {
    axios.defaults.headers.common = {}
  },

  get (resource) {
    return axios.get(resource)
  },

  post (resource, data) {
    return axios.post(resource, data)
  },

  put (resource, data) {
    return axios.put(resource, data)
  },

  delete (resource) {
    return axios.delete(resource)
  },

  /**
     * Perform a custom Axios request.
     *
     * data is an object containing the following properties:
     *  - method
     *  - url
     *  - data ... request payload
     *  - auth (optional)
     *    - username
     *    - password
    **/
  customRequest (data) {
    return axios(data)
  },

  mount401Interceptor () {
    if (process.env.NODE_ENV === 'development') {
      this._reqInterceptor = axios.interceptors.request.use(config => {
        console.log('Request Interceptor', config)
        return config
      }, error => {
        return Promise.reject(error)
      })
    }

    this._401interceptor = axios.interceptors.response.use(
      (response) => {
        console.log('Response Interceptor', response)
        return response
      },
      error => {
        if (error.response && error.response.status === 401) {
          throw error
        }

        throw error
      }
    )
  },

  unmount401Interceptor () {
    // Eject the interceptor
    axios.interceptors.response.eject(this._401interceptor)
    axios.interceptors.response.eject(this._reqInterceptor)
  },

  handlingError (error) {
    console.log(error.request)
    if (error.request.status > 0) {
      const response = JSON.parse(error.request.response)
      throw new ErrorService('warning', response.status, response.message)
    } else {
      throw new ErrorService('error', error.status, error.message)
    }
  }
}

export default ApiService
export { ApiService, ErrorService }
