import { ReactNode, useLayoutEffect, useMemo, useState } from 'react'
import MenuItem from './MenuItem'
import clsx from 'clsx'
import { useOutsideClick } from '@/hooks'

interface MenuProps {
  children: ReactNode
  menus: { text: string; link: string }[]
  className?: any
  isOpen?: boolean
  onClose: () => void
}

const Menu = (props: MenuProps) => {
  const { children, menus, isOpen, onClose } = props
  const [bottomHeight, setBottomHeight] = useState<any>(0)
  const childRef = useOutsideClick(() => {
    if (onClose) {
      onClose()
    }
  })

  useLayoutEffect(() => {
    if (childRef.current) {
      const height = childRef.current.clientHeight
      setBottomHeight(height)
    }
  }, [isOpen])

  const classes = useMemo(
    () =>
      clsx([
        {
          'hidden': !isOpen,
        },
      ]),
    [isOpen]
  )

  return (
    <div className="relative">
      <div ref={childRef}>{children}</div>
      <div
        ref={childRef}
        className={`absolute -bottom-full right-0 z-50 w-[300px] bg-gray-400 grid grid-cols-1 divide-y divide-gray-500 ${classes}`}
        style={{ bottom: -bottomHeight }}
      >
        {menus.map((menu, index) => (
          <MenuItem key={`drop-menu-${index}`} {...menu} onClick={onClose} />
        ))}
      </div>
    </div>
  )
}

export default Menu
