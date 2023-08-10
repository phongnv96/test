import { Button } from '@/components'
import { DiaryItemType } from '../../types'
import DiaryItem from './DiaryItem'

interface DiaryRecordProps {
  data: DiaryItemType[]
  onLoadData: () => void
}
const DiaryRecord = (props: DiaryRecordProps) => {
  const { data, onLoadData } = props
  return (
    <>
      <div className="grid grid-cols-4 gap-[12px]">
        {data.map((diary) => (
          <DiaryItem key={`diary-record-${diary.id}`} {...diary} />
        ))}
      </div>
      <div className="my-14 text-center">
        <Button onClick={onLoadData}> 自分の日記をもっと見る</Button>
      </div>
    </>
  )
}

export default DiaryRecord
