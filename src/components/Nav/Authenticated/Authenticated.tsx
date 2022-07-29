import { Logo } from 'components/Logo'
import { SearchInput } from 'components/SearchInput'

import { authNavOptions } from '../values/authNavOptions'
import { HeaderOption } from './HeaderOption'
import { MobileMenu } from './MobileMenu'
import { Notification } from './Notification'
import { PlusDropDown } from './PlusDropDown'
import { UserProfile } from './UserProfile'

interface AuthenticatedProps {}

export const Authenticated: React.FC<AuthenticatedProps> = () => {
  return (
    <header>
      <nav className="max-w-screen-2xl mx-auto h-[85px] flex items-center justify-between px-3 bg-[#161B22] md:h-[70px] sticky top-0 z-10">
        <MobileMenu />

        {/** Left side */}

        <div className="flex items-center p-1">
          <Logo />
          <div className="h-[30px] w-[300px] ml-2 hidden md:block">
            <SearchInput />
          </div>
          <div className="ml-1 w-[290px] hidden md:flex items-center justify-between px-3">
            {authNavOptions.map((option) => (
              <HeaderOption
                href={option.href}
                title={option.title}
                key={option.title}
              />
            ))}
          </div>
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
