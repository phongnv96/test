import { IconLocalType } from "@/types"
import Icon from "../Icon"
import { NavLink } from "react-router-dom"
import Bag from "../Bag"
interface NavItemProps {
    iconName: IconLocalType,
    link: string,
    label: string,
    bag?: number,
}
const NavItem: React.FC<NavItemProps> = (props: NavItemProps) => {
    const {iconName, link, label, bag} = props
  return (
    <NavLink to={link} className={({ isActive, isPending }) =>
    isPending ? "text-secondary" : isActive ? "text-primary-400" : "text-white"
  } >
    <div className="p-2 flex gap-2 items-center inline-block">
        <Bag count={bag}>
        <Icon name={iconName} />
        </Bag>
            <span className="ml-2">{label}</span>
    </div>
    </NavLink>

  )
}

export default NavItem