interface CardRecordProps {
  imageUrl: string
  title: string
  subTitle: string
}
import './_style.scss'

const CardRecord = (props: CardRecordProps) => {
  const { imageUrl, title, subTitle } = props
  return (
    <div
      className="border-[24px] border-solid border-primary-300 flex items-center min-h-[324px] card-record bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="text-center gap-3 w-full z-[1]">
        <div className="text-[25px] text-primary-300">{title}</div>
        <div className="inline-block text-[14px] min-w-[160px] bg-primary-400 text-white">
          {subTitle}
        </div>
      </div>
    </div>
  )
}

export default CardRecord
