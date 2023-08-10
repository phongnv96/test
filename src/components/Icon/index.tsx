import { ICON_LOCAL } from './IconDefine'

interface IconProps {
  name: keyof typeof ICON_LOCAL
  [x: string]: any
}
const Icon = (props: IconProps) => {
  const { name, className = '' } = props
  const IconComponent = ICON_LOCAL[name]
  return (
    <span className={className} {...props}>
      <IconComponent />
    </span>
  )
}

export default Icon
