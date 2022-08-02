import Link from 'next/link'

interface MenuOptionProps {
  title: string
  href: string
  borderBottom?: boolean
}
export const MenuOption: React.FC<MenuOptionProps> = ({
  title,
  href,
  borderBottom,
}) => {
  return (
    <Link href={`/${href}`} key={title}>
      <a>
        <button
          className={`w-full text-base font-normal cursor-pointer tracking-normal text-[#f9f9f9] hover:bg-blue-600 p-1 border-[#393f47] text-start px-3 mb-1 ${
            borderBottom ? 'border-b-[2px]' : ''
          }`}
        >
          {title}
        </button>
      </a>
    </Link>
  )
}
