import { NavLink } from 'react-router-dom'

interface MenuItemProps {
  text: string
  onClick?: (data?: any) => void
  link?: string
  [x: string]: any
}
const MenuItem = (props: MenuItemProps) => {
  const { text, link = '/', onClick = () => {} } = props
  return (
    <NavLink
      to={link}
      className={({ isActive, isPending }) =>
        isPending ? 'text-secondary' : isActive ? 'text-primary-400' : 'text-white'
      }
    >
      <div className="px-8 py-6 bg-dark-400" onClick={onClick}>
        {text}
      </div>
    </NavLink>
  )
}

export default MenuItem
