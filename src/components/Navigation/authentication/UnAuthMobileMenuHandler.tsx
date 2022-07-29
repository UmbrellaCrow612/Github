import { GiHamburgerMenu } from 'react-icons/gi'

interface UnAuthMobileMenuHandlerProps {}

export const UnAuthMobileMenuHandler: React.FC<
  UnAuthMobileMenuHandlerProps
> = () => {
  return (
    <div className="md:hidden">
      <GiHamburgerMenu className="text-2xl text-[#f9f9f9] cursor-pointer hover:opacity-80 ml-3" />
    </div>
  )
}
