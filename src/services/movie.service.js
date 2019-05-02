import ApiService from './api.service'

const MovieService = {
  getBy: async function (id) {
    try {
      const response = await ApiService.get(`/films/${id}`)
      if (response.status === 200) {
        return response.data
      }

      throw response
    } catch (error) {
      ApiService.handlingError(error)
    }
  },

  get: async function () {
    try {
      const response = await ApiService.get('/films/')
      if (response.status === 200) {
        return response.data.results
      }

      throw response
    } catch (error) {
      ApiService.handlingError(error)
    }
  },

  find: async function(param) {
    const requestData = {
      url: '/films',
      params: {
        search: param
      }
    }
    try {
      const response = await ApiService.customRequest(requestData);
      if (response.status === 200) {
        return response.data.results;
      }

      throw response;
    } catch (error) {
      ApiService.handlingError(error);
    }
  }
}

export default MovieService
