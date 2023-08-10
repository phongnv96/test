import { useLoading } from '@/hooks'
import { RecommendCards, RecommendPosts } from '../components'
import { RecommendItemType, RecommendPostType } from '../types'

const dataCards: RecommendItemType[] = [
  {
    id: 1,
    title: (
      <>
        RECOMMENDED
        <br /> COLUMN
      </>
    ),
    subTitle: 'オススメ',
  },
  {
    id: 2,
    title: (
      <>
        RECOMMENDED <br /> DIET
      </>
    ),
    subTitle: 'ダイエット',
  },
  {
    id: 3,
    title: (
      <>
        RECOMMENDED <br /> BEAUTY
      </>
    ),
    subTitle: '美容',
  },
  {
    id: 4,
    title: (
      <>
        RECOMMENDED <br /> HEALTH
      </>
    ),
    subTitle: '健康',
  },
]

const dataPosts: RecommendPostType[] = [
  {
    id: 1,
    imageUrl: './src/assets/images/column-1.jpg',
    time: '2021.05.17   23:25',
    tittle: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    subTitle: '#魚料理  #和食  #DHA',
  },
  {
    id: 2,
    imageUrl: './src/assets/images/column-2.jpg',
    time: '2021.05.17   23:25',
    tittle: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    subTitle: '#魚料理  #和食  #DHA',
  },
  {
    id: 3,
    imageUrl: './src/assets/images/column-3.jpg',
    time: '2021.05.17   23:25',
    tittle: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    subTitle: '#魚料理  #和食  #DHA',
  },
  {
    id: 4,
    imageUrl: './src/assets/images/column-4.jpg',
    time: '2021.05.17   23:25',
    tittle: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    subTitle: '#魚料理  #和食  #DHA',
  },
  {
    id: 5,
    imageUrl: './src/assets/images/column-5.jpg',
    time: '2021.05.17   23:25',
    tittle: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    subTitle: '#魚料理  #和食  #DHA',
  },
  {
    id: 6,
    imageUrl: './src/assets/images/column-6.jpg',
    time: '2021.05.17   23:25',
    tittle: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    subTitle: '#魚料理  #和食  #DHA',
  },
  {
    id: 7,
    imageUrl: './src/assets/images/column-7.jpg',
    time: '2021.05.17   23:25',
    tittle: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    subTitle: '#魚料理  #和食  #DHA',
  },
  {
    id: 8,
    imageUrl: './src/assets/images/column-8.jpg',
    time: '2021.05.17   23:25',
    tittle: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    subTitle: '#魚料理  #和食  #DHA',
  },
]

const RecommendContainer = () => {
  const { showLoading } = useLoading()

  const handleLoadMoreRecommendPosts = () => {
    showLoading()
  }

  return (
    <div className="my-14 max-w-screen-xl m-auto p-4">
      <RecommendCards data={dataCards} />
      <RecommendPosts data={dataPosts} onLoadData={handleLoadMoreRecommendPosts} />
    </div>
  )
}

export default RecommendContainer
