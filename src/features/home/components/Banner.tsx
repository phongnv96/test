import { ProcessCircle, Chart } from '@/components'

interface BannerProps {
  dataAchievement: any
  dataChart: any
}

const Banner = (props: BannerProps) => {
  const { dataAchievement, dataChart } = props
  return (
    <div className="grid grid-cols-10">
      <div className="col-span-4">
        <div
          className="flex items-center justify-center min-h-[340px] bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${dataAchievement.imageUrl})` }}
        >
          <ProcessCircle currentPercent={dataAchievement.rate} prefixTitle={dataAchievement.date} />
        </div>
      </div>
      <div className="col-span-6 px-8 bg-dark">
        <Chart data={dataChart?.data} config={dataChart?.config} />
      </div>
    </div>
  )
}

export default Banner
