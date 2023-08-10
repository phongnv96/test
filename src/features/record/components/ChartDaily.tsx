import { Chart } from '@/components'
import clsx from 'clsx'
import { useCallback, useState } from 'react'
import { BtnActionFilterType, ChartFilterType } from '../types'

const btnActions: BtnActionFilterType[] = [
  {
    id: 1,
    title: '日',
    value: 'days',
  },
  {
    id: 2,
    title: '週',
    value: 'weeks',
  },
  {
    id: 3,
    title: '月',
    value: 'months',
  },
  {
    id: 4,
    title: '月',
    value: 'quarters',
  },
]

interface ChartDailyProps {
  dataChart: any
  defaultFilter?: ChartFilterType
  onLoadData?: (type: ChartFilterType) => void
}

const ChartDaily = (props: ChartDailyProps) => {
  const { dataChart = [], defaultFilter = 'months', onLoadData } = props
  const [filterBy, setFilterBy] = useState<ChartFilterType>(defaultFilter)
  const handleFilterData = (filterValue: ChartFilterType) => {
    setFilterBy(filterValue)
    if (onLoadData) {
      onLoadData(filterValue)
    }
  }
  const btnActionClass = useCallback(
    (currentValue: ChartFilterType) =>
      clsx([
        'rounded-3xl px-8 py-2',
        {
          'bg-primary-300 text-white': currentValue === filterBy,
        },
        { 'text-primary-300 bg-white': currentValue !== filterBy },
      ]),
    [filterBy]
  )
  return (
    <div className="bg-dark p-6">
      <div className="flex gap-8 text-white">
        <h2 className="text-[15px] leading-[18px]">
          BODY <br /> RECORD
        </h2>
        <h2 className="text-[22px] leading-[27px]">2021.05.21</h2>
      </div>
      <Chart data={dataChart?.data} config={dataChart?.config} />
      <div className="flex gap-4">
        {btnActions.map((btn) => (
          <button
            className={btnActionClass(btn.value)}
            key={`record-chart-${btn.id}`}
            onClick={() => handleFilterData(btn.value)}
          >
            {btn.title}
          </button>
        ))}
      </div>
    </div>
  )
}

export default ChartDaily
