import { ExerciseRecordItem } from '../../types'

const ExerciseItem = (props: Omit<ExerciseRecordItem, 'id'>) => {
  const { time, title, kcal, subTitle } = props
  return (
    <ul className="list-disc list-inside border-b border-solid border-dark-400 pb-1">
      <li className="flex justify-between">
        <div className="text-[15px] ">
          <div className="font-light leading-[22px]">
            <span>{title}</span>
            <span className="pl-1">{subTitle}</span>
          </div>
          <div className="text-primary-300 leading-[18px]">{kcal}kcal</div>
        </div>
        <div className="text-primary-300 text-[18px] leading-[22px] pr-4">{time}</div>
      </li>
    </ul>
  )
}

export default ExerciseItem
