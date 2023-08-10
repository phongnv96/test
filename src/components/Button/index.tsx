import { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: 'primary' | 'secondary',
    size: 'sm'| 'md' | 'lg'
}
const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { variant} = props
  return (
    <button {...props} className="py-[14px] px-[4px]">
        
    </button>
  )
}

export default Button