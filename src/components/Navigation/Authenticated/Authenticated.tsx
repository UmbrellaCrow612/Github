import { Logo } from 'components/Logo'
import { SearchInput } from 'components/SearchInput'

import { HeaderOptions } from './HeaderOptions'
import { MobileMenu } from './MobileMenu'
import { Notification } from './Notification'
import { PlusDropDown } from './PlusDropDown'
import { UserProfile } from './UserProfile'

interface AuthenticatedProps {}

export const Authenticated: React.FC<AuthenticatedProps> = () => {
  return (
    <header className="w-full bg-[#161B22]">
      <nav className="max-w-screen-2xl mx-auto h-[85px] flex items-center justify-between px-3  md:h-[70px] sticky top-0 z-10">
        <MobileMenu />

        {/** Left side */}

        <div className="flex items-center p-1">
          <Logo />
          <div className="h-[30px] w-[300px] ml-2 hidden md:block">
            <SearchInput />
          </div>
          <HeaderOptions />
        </div>

        {/** Left side ends*/}

        {/** right side*/}

        <div className="flex items-center">
          <Notification />
          <PlusDropDown />
          <UserProfile />
        </div>

        {/** right side ends*/}
      </nav>
    </header>
  )
}
