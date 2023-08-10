import { dataChartSample, defaultConfigChart } from '@/configs'
import React from 'react'
import ChartApex from 'react-apexcharts'

interface ChartProps {
  data: any[]
  config?: any
}

const Chart = (props: ChartProps) => {
  const { data = dataChartSample, config = defaultConfigChart } = props
  return (
    <div className="w-full">
      <ChartApex options={config} series={data} type="line" width="100%" height={316} />
    </div>
  )
}

export default React.memo(Chart)
