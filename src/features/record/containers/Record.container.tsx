import { mockData } from '@/utils'
import { ChartDaily, DiaryRecord, ExerciseRecord, RecordCards } from '../components'
import { ChartFilterType, DiaryItemType, ExerciseRecordItem, RecordCardItemType } from '../types'
import { useLoading } from '@/hooks'
import { dataChartSample, defaultConfigChart } from '@/configs'
import { useChartDaily } from '../hooks'

const datRecords: RecordCardItemType[] = [
  {
    id: '1',
    imageUrl: './src/assets/images/MyRecommend-1.jpg',
    title: 'BODY RECORD',
    subTitle: '自分のカラダの記録',
  },

  {
    id: '3',
    imageUrl: './src/assets/images/MyRecommend-3.jpg',
    title: 'MY EXERCISE',
    subTitle: '自分の運動の記録',
  },
  {
    id: '2',
    imageUrl: './src/assets/images/MyRecommend-2.jpg',
    title: 'MY DIARY',
    subTitle: '自分の日記',
  },
]

const exerciseRecords: ExerciseRecordItem[] = mockData(
  {
    id: 1,
    time: '10 min',
    title: '家事全般',
    subTitle: '（立位・軽い）',
    kcal: 26,
  },
  26
)

const diaryRecords: DiaryItemType[] = mockData(
  {
    id: 1,
    time: '23:25',
    date: '2021.05.21 ',
    title: '私の日記の記録が一部表示されます。',
    description:
      'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
  },
  8
)

const RecordContainer = () => {
  const { showLoading } = useLoading()
  const { data, getDataChartByFilter } = useChartDaily()

  const handleLoadMoreDiaryRecords = () => {
    showLoading()
  }

  const handleLoadDataChartByFilter = (filterType: ChartFilterType) => {
    getDataChartByFilter(filterType)
  }

  return (
    <section className="max-w-screen-xl m-auto p-4">
      <RecordCards data={datRecords} />
      <ChartDaily
        dataChart={{ data: data, config: defaultConfigChart }}
        onLoadData={handleLoadDataChartByFilter}
      />
      <ExerciseRecord data={exerciseRecords} />
      <DiaryRecord data={diaryRecords} onLoadData={handleLoadMoreDiaryRecords} />
    </section>
  )
}

export default RecordContainer
