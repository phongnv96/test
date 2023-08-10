import { ExerciseRecordItem } from '../../types'
import ExerciseItem from './ExerciseItem'

interface ExerciseRecordProps {
  data: ExerciseRecordItem[]
}
const ExerciseRecord = (props: ExerciseRecordProps) => {
  const { data = [] } = props
  return (
    <div className="bg-dark p-6 my-14 ">
      <div className="flex gap-8 text-white mb-8">
        <h2 className="text-[15px] leading-[18px]">
          MY <br /> EXERCISE
        </h2>
        <h2 className="text-[22px] leading-[27px]">2021.05.21</h2>
      </div>
      <div className="max-h-80 overflow-y-auto grid grid-cols-2 gap-x-16 gap-y-4 text-white">
        {data.map((item) => (
          <ExerciseItem key={`exercise-record-${item.id}`} {...item} />
        ))}
      </div>
    </div>
  )
}

export default ExerciseRecord
