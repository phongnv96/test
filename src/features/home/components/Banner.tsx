interface BannerProps {
    imageUrl: string
    dataChart: any
}

const Banner = (props: BannerProps) => {
  const {imageUrl, dataChart} = props
  return (
    <div className="grid grid-cols-2">
        <div>

        </div>
        <div>
            
        </div>
    </div>
  )
}

export default Banner