import { Logo } from 'components/Logo'
import { SearchInput } from 'components/SearchInput'

import { AuthActions } from './AuthActions'
import { HeaderOptions } from './HeaderOptions'
import { MenuHandler } from './MenuHandler'

interface UnAuthenticatedProps {}

export const UnAuthenticated: React.FC<UnAuthenticatedProps> = () => {
  return (
    <header>
      <nav className="max-w-screen-2xl mx-auto h-[85px] flex items-center justify-between px-3 bg-[#161B22] md:h-[70px] sticky top-0 z-10">
        <div className="flex items-center p-2">
          <Logo />
          <HeaderOptions />
        </div>

        <div className="flex p-1 w-[150px] md:w-[370px] justify-between">
          <div className="w-[200px] hidden md:block">
            <SearchInput />
          </div>
          <AuthActions />
          <MenuHandler />
        </div>
      </nav>
    </header>
  )
}
