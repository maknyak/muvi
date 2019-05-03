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

  handlingError (error) {
    console.log(error.message)
    if (error.request.status > 0) {
      throw new ErrorService('warning', error.request.status, error.message)
    } else {
      throw new ErrorService('error', error.request.status, error.message)
    }
  }
}

export default ApiService
export { ApiService, ErrorService }
