import { ShapeHexagon } from '@/components'
import { CategoryType } from '../types'

interface CategoriesProps {
  data: CategoryType[]
}
const Categories = (props: CategoriesProps) => {
  const { data } = props
  return (
    <div className="my-6 flex justify-center gap-11">
      {data.map((category) => (
        <ShapeHexagon
          key={`home-category-${category.id}`}
          iconName={category.iconName}
          title={category.title}
        />
      ))}
    </div>
  )
}

export default Categories
