import clsx from 'clsx'
import { ButtonHTMLAttributes } from 'react'
import './_style.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
}
const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { variant = 'primary', size = 'lg', className, children } = props
  const classes = clsx([
    'font-light leading-[26px] text-white py-[14px] px[4px] rounded min-w-[295px]',
    className,
    {
      'bg-gradient-to-r from-primary-300 to-primary-400': variant === 'primary',
    },
    {
      'btn-secondary': variant === 'secondary',
    },
    `bnt-${size}`,
  ])
  return (
    <button {...props} className={classes}>
      {children}
    </button>
  )
}

export default Button
