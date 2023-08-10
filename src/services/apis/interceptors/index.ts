import { handleErrorCommon } from '@/utils'
import { AxiosInstance, AxiosError } from 'axios'

const setMainInterceptor = (instance: AxiosInstance) => {
  instance.interceptors.request.use(async (config) => {
    const customConfigs = { ...config }

    // write code to handle request here
    return customConfigs
  })

  instance.interceptors.response.use(
    (response) =>
      // write code to handle response here
      response.data,
    (error: AxiosError) => {
      // write code to handle error response
      handleErrorCommon(error)
    }
  )
}

export { setMainInterceptor }
