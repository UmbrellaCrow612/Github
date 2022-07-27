import { GiHamburgerMenu } from 'react-icons/gi'

interface MobileMenuProps {}

export const MobileMenu: React.FC<MobileMenuProps> = () => {
  return (
    <div className="cursor-pointer p-1 flex items-center justify-center">
      <GiHamburgerMenu className="text-[#F0F6FC] text-2xl" />
    </div>
  )
}
