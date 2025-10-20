// import { message, Modal } from 'antd'
import axios from 'axios'
import { config } from '../config'
import toast from 'react-hot-toast' // import { saveAs } from 'file-saver'

// import JSZip from 'jszip'

// Create an instance of axios with default settings
const apiClient = axios.create({
  baseURL: config.baseURL, // Ensure that API base URL is correctly set in your .env file
  headers: {
    'Content-Type': 'application/json',
  },
})

// apiClient.interceptors.request.use(
//   (config) => {
//     // Retrieve the JWT token from localStorage or any other storage mechanism
//     const token = localStorage.getItem('jwt_token') // Make sure to store it securely

//     if (token) {
//       config.headers['Authorization'] = `Bearer ${token}`
//     }

//     return config
//   },
//   (error) => {
//     console.log('auth token mismatch')

//     return Promise.reject(error)
//   },
// )

export const HeaderGroup = {
  none: {},
  multipart: { 'Content-Type': 'multipart/form-data' },
}

export const handleError = (error) => {
  console.log(error?.response?.data?.message ?? 'Something Went Wrong')

  toast.error(error?.response?.data?.message ?? 'Something Went Wrong')

  if (error?.response?.status === 401) {
    toast.error('Please login again')
    localStorage.clear()
    window.location.replace('/login')
  }
}

// GET Request
export const GetRequest = async (api, params = {}) => {
  return apiClient
    .get(api, { params })
    .then((response) => (response && response?.data ? response.data : handleError()))
    .catch((error) => {
      handleError(error) // Only throw error if you need to log or handle it differently
    })
}

// POST Request
export const PostRequest = async (api, body, header = HeaderGroup.none) => {
  return apiClient
    .post(api, body, { headers: header })
    .then((response) => (response && response?.data ? response.data : handleError()))
    .catch((error) => {
      handleError(error) // Only throw error if you need to log or handle it differently
    })
}

// PUT Request (usually used to update resources, replace the whole resource)
export const PutRequest = async (api, body) => {
  return apiClient
    .put(api, body)
    .then((response) => (response && response?.data ? response.data : handleError()))
    .catch((error) => {
      handleError(error) // Only throw error if you need to log or handle it differently
    })
}

// PATCH Request (usually used to partially update a resource)
export const PatchRequest = async (api, body, header = HeaderGroup.none) => {
  return apiClient
    .patch(api, body, { headers: header })
    .then((response) => (response && response?.data ? response.data : handleError()))
    .catch((error) => {
      handleError(error) // Only throw error if you need to log or handle it differently
    })
}

// DELETE Request
export const DeleteRequest = async (api) => {
  return apiClient
    .delete(api)
    .then((response) => (response && response?.data ? response.data : handleError()))
    .catch((error) => {
      handleError(error) // Only throw error if you need to log or handle it differently
    })
}
