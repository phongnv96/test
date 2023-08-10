import { CardRecord } from '@/components'
import { RecordCardItemType } from '../types'

interface RecordCardsProps {
  data: RecordCardItemType[]
}

const RecordCards = (props: RecordCardsProps) => {
  const { data } = props
  return (
    <div className="my-14 grid grid-cols-3 gap-12">
      {data.map((record) => (
        <CardRecord
          key={`record-cards-${record.id}`}
          imageUrl={record.imageUrl}
          title={record.title}
          subTitle={record.subTitle}
        />
      ))}
    </div>
  )
}

export default RecordCards
