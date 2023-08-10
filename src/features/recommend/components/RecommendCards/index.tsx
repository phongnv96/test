import { RecommendItemType } from '../../types'
import RecommendItem from './RecommendItem'

interface RecommendListProps {
  data: RecommendItemType[]
}

const RecommendList = (props: RecommendListProps) => {
  const { data } = props
  return (
    <div className="grid grid-cols-4 gap-8">
      {data.map((recommend) => (
        <RecommendItem key={`recommend-card-${recommend.id}`} {...recommend} />
      ))}
    </div>
  )
}

export default RecommendList
