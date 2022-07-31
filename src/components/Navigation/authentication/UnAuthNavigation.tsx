import { Logo } from "components/Logo"
import { SearchInput } from "components/SearchInput"
import { AuthActions } from "./AuthActions"
import { UnAuthMenuList } from "./UnAuthMenuList"
import { UnAuthMobileMenuHandler } from "./UnAuthMobileMenuHandler"

interface UnAuthNavigationProps {}

export const UnAuthNavigation: React.FC<UnAuthNavigationProps> = () => {
  return (
    <nav className="max-w-screen-2xl mx-auto h-[85px] flex items-center justify-between px-3 bg-[#161B22] md:h-[70px] sticky top-0 z-10">
      {/** ====== Left side ======= */}

      <div className="flex items-center p-2">
        <Logo />
        <UnAuthMenuList />
      </div>
      {/** ====== Left side ends ======= */}

      {/** ====== right side  ======= */}

      <div className="flex items-center p-2">
        <div className="h-[40px] w-[250px] ml-2 hidden md:block">
          <SearchInput />
        </div>
        <AuthActions />
        <UnAuthMobileMenuHandler />
      </div>

      {/** ====== right side ends ======= */}
    </nav>
  )
}
