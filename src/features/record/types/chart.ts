export type ChartDailyDataType = {
  [x: string]: any
}

export type ChartDaily = {
  dataChart: ChartDailyDataType[]
  config: any[]
}

export type ChartFilterType = 'days' | 'weeks' | 'months' | 'quarters'

export type BtnActionFilterType = {
  id: any
  title: string
  value: ChartFilterType
}

export type ChartDataResponse = {
  data: ChartDailyDataType
}
