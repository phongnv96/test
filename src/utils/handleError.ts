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
       // handle errors by status
    } else if (httpCode === APIStatusCode.RATE_LIMIT) {
      // handle errors by status
    }
  }
}

const handleErrorWithInnerMessage = (error: AxiosError<InnerError>) => {
  const messageCode = error?.response?.data?.status?.message ?? ''
  const errorMessage = INNER_ERROR_MAPPING[messageCode]

  if (errorMessage) {
    // handle errors by server define
  } else {
  }
}

export { handleErrorCommon, handleErrorWithInnerMessage }
