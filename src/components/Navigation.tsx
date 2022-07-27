/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

import { MobileMenu } from './MobileMenu'
import { NavigationGroup } from './NavagationGroup'
import { SearchInput } from './SearchInput'

interface NavigationProps {}

export const Navigation: React.FC<NavigationProps> = () => {
  return (
    <header>
      <nav className="max-w-screen-2xl mx-auto h-[85px] flex items-center justify-between px-3 bg-[#161B22] md:h-[75px]">
        <MobileMenu />

        {/** Left side */}
        <div className="flex items-center p-1">
          {/** Logo */}
          <Link href="/">
            <a>
              <div className="bg-[#F0F6FC] rounded-full border flex items-center justify-center cursor-pointer hover:scale-110 transition-all">
                <img
                  src="/images/logo.png"
                  alt="GitHub"
                  className="w-[45px] md:w-[35px]"
                />
              </div>
            </a>
          </Link>

          {/** md view */}
          <div className="h-[30px] w-[300px] ml-2 hidden md:block">
            <SearchInput />
          </div>

          {/** Options */}

          <div className="ml-1 w-[290px] hidden md:flex items-center justify-between px-3">
            {Options.map((option) => (
              <Link href={`${option.href}`} key={option.title}>
                <a>
                  <h6 className="text-[#f9f9f9] hover:opacity-50 tracking-wide font-normal cursor-pointer">
                    {option.title}
                  </h6>
                </a>
              </Link>
            ))}
          </div>
        </div>

        <NavigationGroup />
      </nav>
    </header>
  )
}

const Options: {
  title: string
  href: string
}[] = [
  {
    title: 'Pulls',
    href: '/',
  },
  {
    title: 'Issues',
    href: '/',
  },
  {
    title: 'Marketplace',
    href: '/',
  },
  {
    title: 'Explore',
    href: '/',
  },
]
