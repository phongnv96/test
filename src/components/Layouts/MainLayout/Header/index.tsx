import { Icon, Menu, NavItem } from '@/components'
import { MenuDropType, NavItemType } from '@/types'
import { useState } from 'react'
import { Link } from 'react-router-dom'
interface HeaderProps {
  menu: NavItemType[]
  dropMenu: MenuDropType[]
}
const Header = (props: HeaderProps) => {
  const { menu = [], dropMenu = [] } = props
  const [showMenuDrop, setShowMenuDrop] = useState<boolean>(false)
  const onOpenMenu = () => {
    setShowMenuDrop(true)
  }
  const onCloseMenu = () => {
    setShowMenuDrop(false)
  }
  return (
    <header className="h-[64px] bg-dark-500">
      <div className="max-w-screen-xl m-auto flex items-center h-full">
        <div>
          <Link to="/">
            <img
              className="h-auto  w-[114px] hover:cursor-pointer"
              src="./src/assets/images/logo.png"
            />
          </Link>
        </div>
        <div className="flex-1" />
        <div>
          <nav className="flex items-center gap-6">
            {menu.map((nav) => (
              <NavItem key={`nav-menu-${nav.id}`} {...nav} />
            ))}
          </nav>
        </div>
        <div className="min-w-[60px] flex flex-row-reverse">
          <Menu menus={dropMenu} isOpen={showMenuDrop} onClose={onCloseMenu}>
            <Icon
              onClick={onOpenMenu}
              name={showMenuDrop ? 'IconClose' : 'IconMenu'}
              className="cursor-pointer"
            />
          </Menu>
        </div>
      </div>
    </header>
  )
}

export default Header
