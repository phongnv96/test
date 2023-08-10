import { IconLocalType } from '@/types'
import './_styles.scss'
import { Icon } from '..'
interface ShapeHexagonProps {
  iconName: IconLocalType
  title: string
  link?: string
}
const ShapeHexagon = (props: ShapeHexagonProps) => {
  const { iconName, title, link } = props
  return (
    <div className="hexagon m-4 relative flex items-center justify-center hover:cursor-pointer">
      <div className="flex flex-col items-center">
        <Icon name={iconName} />
        <h2 className="text-[20px] leading-[24px] text-white mt-2">{title}</h2>
      </div>
    </div>
  )
}

export default ShapeHexagon
