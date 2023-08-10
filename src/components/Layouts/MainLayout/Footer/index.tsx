interface FooterProps {
  links: any[]
}
const Footer = (props: FooterProps) => {
  const { links } = props
  return (
    <footer className="bg-dark-500 h-[128px] absolute w-full bottom-0">
      <div className="max-w-screen-xl m-auto p-4 flex items-center gap-11 h-full">
        {links.map((item, index) => (
          <a className="text-white " key={`footer-link-${index}`}>
            {item.text}
          </a>
        ))}
      </div>
    </footer>
  )
}

export default Footer
