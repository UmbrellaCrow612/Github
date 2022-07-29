import { GiHamburgerMenu } from 'react-icons/gi'

interface UnAuthMobileMenuHandlerProps {}

export const UnAuthMobileMenuHandler: React.FC<
  UnAuthMobileMenuHandlerProps
> = () => {
  return (
    <button className="flex items-center justify-center text-center md:hidden">
      <GiHamburgerMenu className="text-2xl text-[#f9f9f9] cursor-pointer hover:opacity-80 ml-3" />
    </button>
  )
}
