import Link from 'next/link'

interface HeaderOptionProps {
  href: string
  title: string
}

export const HeaderOption: React.FC<HeaderOptionProps> = ({ href, title }) => {
  return (
    <Link href={`/${href}`} key={title}>
      <a>
        <button className="text-[#f9f9f9] hover:opacity-50 tracking-wide font-normal cursor-pointer">
          {title}
        </button>
      </a>
    </Link>
  )
}
