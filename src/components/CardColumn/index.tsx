import CardPhoto from "../CardPhoto"
interface CardColumnProps {
    imageUrl: string,
    time: string,
    tittle: string,
    subTitle: string,
}
const CardColumn = (props: CardColumnProps) => {
  const {imageUrl, time, tittle, subTitle} = props
  return (
    <div>
        <CardPhoto imageUrl={imageUrl} time={time}/>
        <div className="font-light leading-[22px]">
        <div className="my-2 text-[15px]  text-dark-500">
            {tittle}
        </div>
        <div className="font-[12px] text-primary-400">
            {subTitle}
        </div>
        </div>

    </div>
  )
}

export default CardColumn