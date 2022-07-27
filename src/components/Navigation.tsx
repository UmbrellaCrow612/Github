/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

import { MobileMenu } from './MobileMenu'
import { NavigationGroup } from './NavagationGroup'

interface NavigationProps {}

export const Navigation: React.FC<NavigationProps> = () => {
  return (
    <header>
      <nav className="max-w-screen-xl mx-auto h-[85px] flex items-center justify-between px-3 bg-[#161B22]">
        <MobileMenu />

        {/** Logo */}
        <Link href="/">
          <a>
            <div className="bg-[#F0F6FC] rounded-full border flex items-center justify-center cursor-pointer hover:scale-110 transition-all">
              <img src="/images/logo.png" alt="GitHub" className="w-[45px]" />
            </div>
          </a>
        </Link>

        <NavigationGroup />
      </nav>
    </header>
  )
}
