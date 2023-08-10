import { RecommendItemType } from '../../types'

const RecommendItem = (props: RecommendItemType) => {
  const { title, subTitle } = props
  return (
    <div className="py-6 px-2 bg-dark flex flex-col items-center text-center">
      <h1 className="text-[22px] leading-[27px] text-primary-300">{title}</h1>
      <span className="w-14 h-1 border-b border-solid border-white  my-2"></span>
      <h2 className="text-white text-[18px] font-light leading-[26px]">{subTitle}</h2>
    </div>
  )
}

export default RecommendItem
