import { Button, CardColumn } from '@/components'
import { RecommendPostType } from '../types'

interface RecommendPostsProps {
  data: RecommendPostType[]
  onLoadData: () => void
}
const RecommendPosts = (props: RecommendPostsProps) => {
  const { data, onLoadData } = props
  return (
    <>
      <div className="grid grid-cols-4 gap-x-2 gap-y-5 my-14">
        {data.map((post) => (
          <CardColumn key={`recommend-post-${post.id}`} {...post} />
        ))}
      </div>
      <div className="text-center">
        <Button onClick={onLoadData}>コラムをもっと見る</Button>
      </div>
    </>
  )
}

export default RecommendPosts
