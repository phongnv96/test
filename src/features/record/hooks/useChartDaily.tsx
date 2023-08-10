import useRequest from '@ahooksjs/use-request'
import { ChartFilterType } from '../types'
import { getChartDailyByFilter } from '../services'
import { useEffect } from 'react'
import { useGlobalContext } from '@/contexts/GlobalContextProvider'

const useChartDaily = () => {
  const { setLoading } = useGlobalContext()
  const { loading, data, run } = useRequest(
    (filter: ChartFilterType) => getChartDailyByFilter(filter),
    {
      manual: true,
      onSuccess: () => {
        // handle data success
      },
      onError: (error: any) => {
        // handle data error
        console.log(error)
      },
    }
  )

  const getDataChartByFilter = (filterType: ChartFilterType) => {
    run(filterType)
  }

  useEffect(() => {
    if (!loading) {
      const timerDelayHideLoading = setTimeout(() => {
        setLoading(loading)
        clearTimeout(timerDelayHideLoading)
      }, 1500)
    } else {
      setLoading(loading)
    }
  }, [loading])

  useEffect(() => {
    run('months')
  }, [])

  return { data, getDataChartByFilter }
}

export default useChartDaily
