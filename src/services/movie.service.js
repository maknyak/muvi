import ApiService from './api.service'

const MovieService = {
  get: async function (url) {
    try {
      const response = await ApiService.get(url)
      if (response.statu === 200) {
        return response.data.results
      }

      throw response
    } catch (error) {
      ApiService.handlingError(error)
    }
  }
}

export default MovieService
