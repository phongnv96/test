import { ICON_LOCAL } from "./IconDefine"

interface IconProps {
    name: keyof typeof ICON_LOCAL
}
const Icon = (props: IconProps) => {
  const {name} = props
  const IconComponent = ICON_LOCAL[name]
  return (
    <span>
<IconComponent />
    </span> 
  )
}

export default Icon