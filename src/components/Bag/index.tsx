import { ReactNode } from 'react'

interface BagProps {
  count?: number
  color?: string
  children?: ReactNode
}
const Bag: React.FC<BagProps> = (props: BagProps) => {
  const { children, count = 0, color } = props
  return count ? (
    <div className="relative inline-block p-[2px]">
      <span
        className="absolute top-1 text-[10px] -right-2 w-4 h-4 rounded-full flex items-center text-center text-white bg-primary-500"
        style={color ? { backgroundColor: color } : {}}
      >
        <span className="flex-1">{count}</span>
      </span>
      {children}
    </div>
  ) : (
    <>{children}</>
  )
}

export default Bag
