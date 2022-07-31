/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

import { Logo } from '../Logo'
import { SearchInput } from '../SearchInput'
import { NavigationGroup } from './NavigationGroup'

interface NavigationProps {}

export const Navigation: React.FC<NavigationProps> = () => {
  return (
    <header>
      <nav className="max-w-screen-2xl mx-auto h-[85px] flex items-center justify-between px-3 bg-[#161B22] md:h-[70px] sticky top-0 z-10">
     

        {/** ====== Left side ====== */}

        <div className="flex items-center p-1">
          <Logo />
          {/** md view */}
          <div className="h-[30px] w-[300px] ml-2 hidden md:block">
            <SearchInput />
          </div>

          {/** Options */}
          <div className="ml-1 w-[290px] hidden md:flex items-center justify-between px-3">
            {Options.map((option) => (
              <Link href={`/${option.href}`} key={option.title}>
                <a>
                  <h6 className="text-[#f9f9f9] hover:opacity-50 tracking-wide font-normal cursor-pointer">
                    {option.title}
                  </h6>
                </a>
              </Link>
            ))}
          </div>
          {/** Options end*/}
        </div>

        {/** ====== Left side ends ======*/}

        {/** ====== right side ======*/}

        <NavigationGroup />

        {/** ====== right side ends ======*/}
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
    href: 'Pulls',
  },
  {
    title: 'Issues',
    href: 'Issues',
  },
  {
    title: 'Marketplace',
    href: 'Marketplace',
  },
  {
    title: 'Explore',
    href: 'Explore',
  },
]
