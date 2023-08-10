import { useLoading } from '@/hooks'
import { Banner, Categories, Foods } from '../components'
import { CategoryType, FoodType } from '../types'
import { dataChartSample, defaultConfigChart } from '@/configs'

const dataBanner = {
  dataAchievement: {
    imageUrl: './src/assets/images/d01.jpg',
    date: '05/21',
    rate: 75,
  },
  dataChart: {
    data: dataChartSample,
    config: defaultConfigChart,
  },
}

const categoriesData: CategoryType[] = [
  {
    id: '1',
    iconName: 'IconChop',
    title: 'Morning',
  },
  {
    id: '2',
    iconName: 'IconChop',
    title: 'Lunch',
  },
  {
    id: '3',
    iconName: 'IconChop',
    title: 'Dinner',
  },
  {
    id: '4',
    iconName: 'IconCup',
    title: 'Snack',
  },
]

const datFoods: FoodType[] = [
  {
    id: 1,
    imageUrl: './src/assets/images/m01.jpg',
    time: '05.21.Morning',
  },
  {
    id: 2,
    imageUrl: './src/assets/images/l03.jpg',
    time: '05.21.Lunch',
  },
  {
    id: 3,
    imageUrl: './src/assets/images/d01.jpg',
    time: '05.21.Dinner',
  },
  {
    id: 4,
    imageUrl: './src/assets/images/l01.jpg',
    time: '05.21.Snack',
  },
  {
    id: 5,
    imageUrl: './src/assets/images/m01.jpg',
    time: '05.20.Morning',
  },
  {
    id: 6,
    imageUrl: './src/assets/images/l02.jpg',
    time: '05.21.Morning',
  },
  {
    id: 7,
    imageUrl: './src/assets/images/d02.jpg',
    time: '05.21.Morning',
  },
  {
    id: 8,
    imageUrl: './src/assets/images/s01.jpg',
    time: '05.20.Lunch',
  },
]

const HomeContainer = () => {
  const { showLoading } = useLoading()

  const handleLoadMoreFoods = () => {
    showLoading()
  }

  return (
    <>
      <Banner {...dataBanner} />
      <section className="max-w-screen-xl m-auto p-4">
        <Categories data={categoriesData} />
        <Foods data={datFoods} onLoadData={handleLoadMoreFoods} />
      </section>
    </>
  )
}

export default HomeContainer
