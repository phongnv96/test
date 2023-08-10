import { DiaryItemType } from '../../types'

const DiaryItem = (props: DiaryItemType) => {
  const { date, time, title, description } = props
  return (
    <div className="p-6 border border-solid border-dark-500">
      <div className="text-[18px] leading-[22px]">
        <h2>{date}</h2>
        <h2>{time}</h2>
      </div>
      <div className="my-6">
        <div>{title}</div>
        <div>{description}</div>
      </div>
    </div>
  )
}

export default DiaryItem
