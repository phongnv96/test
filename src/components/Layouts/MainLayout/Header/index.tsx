import { NavItem } from "@/components"
import { NavItemType } from "@/types"

const Header = () => {
  const navItem: NavItemType[] = [{
    id: 1,
    iconName: 'IconWrite',
    label: '自分の記録',
    link: '/write'
  },
  {
    id: 2,
    iconName: 'IconAchieve',
    label: 'チャレンジ',
    link: '/achieve'
  },
  {
    id: 3,
    iconName: 'IconChat',
    label: 'チャレンジ',
    link: '/achieve',
    bag: 1
  },
  
]
  return (
    <header className="h-[64px] bg-dark-500">
      <div className="max-w-5xl m-auto flex items-center h-full">
    <div>
        <img className="h-auto  w-[114px]" src="./src/assets/images/logo.png" />
    </div>
      <div className="flex-1" />
      <div>
        <nav className="flex items-center gap-6">
          {navItem.map(nav => (<NavItem key={`nav-menu-${nav.id}`} {...nav}  />))}
        </nav>
      </div>
      </div>
    </header>
  )
}

export default Header