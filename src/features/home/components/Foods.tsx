import { Button, CardPhoto } from '@/components'
import { FoodType } from '../types'

interface FoodsProps {
  data: FoodType[]
  onLoadData: () => void
}

const Foods = (props: FoodsProps) => {
  const { data = [], onLoadData } = props
  return (
    <>
      <div className="grid grid-cols-4 gap-3">
        {data.map((food) => (
          <CardPhoto key={`home-foods-${food.id}`} imageUrl={food.imageUrl} time={food.time} />
        ))}
      </div>
      <div className="text-center my-6">
        <Button className="mt-6" onClick={onLoadData}>
          記録をもっと見る
        </Button>
      </div>
    </>
  )
}

export default Foods
