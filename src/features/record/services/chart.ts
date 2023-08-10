import { http } from '@/services'
import { ChartDataResponse, ChartFilterType } from '../types'

const getChartDailyByFilter = (type: ChartFilterType): Promise<ChartDataResponse> =>
  http.get(`api/chart/${type}`)

export { getChartDailyByFilter }
