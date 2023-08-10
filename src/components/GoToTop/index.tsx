import { Icon } from '..'

const GoToTop = () => {
  const handleClick = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div
      className="fixed right-2 xl:right-[5%] 2xl:right-[10%] bottom-1/4 w-12 h-12 hover:cursor-pointer bg-white rounded-full"
      onClick={handleClick}
    >
      <Icon name="IconScroll" />
    </div>
  )
}

export default GoToTop
