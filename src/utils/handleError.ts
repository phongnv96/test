
import { APIStatusCode, INNER_ERROR_MAPPING } from '@/constants'
import { InnerError } from '@/types'
import { AxiosError } from 'axios'

/**
 * @Description
 * Error handler common
 */
const handleErrorCommon = (error: any) => {
  const httpCode = error?.response?.status

  if (httpCode) {
    // The request was made and the server responded with a status code
    if (httpCode >= APIStatusCode.INTERNAL_SERVER) {
      // notification.error({
      //   message: API_ERROR_MAPPING[APIStatusCode.INTERNAL_SERVER],
      // })
    } else if (httpCode === APIStatusCode.RATE_LIMIT) {
      // notification.error({
      //   message: API_ERROR_MAPPING[APIStatusCode.RATE_LIMIT],
      // })
    }
  }
}

const handleErrorWithInnerMessage = (error: AxiosError<InnerError>) => {
  const messageCode = error?.response?.data?.status?.message ?? ''
  const errorMessage = INNER_ERROR_MAPPING[messageCode]

  if (errorMessage) {
    // notification.error({ message: errorMessage })
  } else {
    // notification.error({ message: API_ERROR_MAPPING[APIStatusCode.INTERNAL_SERVER] })
  }
}

export { handleErrorCommon, handleErrorWithInnerMessage }
