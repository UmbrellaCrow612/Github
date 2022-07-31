import { GiHamburgerMenu } from 'react-icons/gi'
import { useRecoilState } from 'recoil'

import { mobileDrawerState } from '../../../../atoms'

interface MobileMenuProps {}

export const MobileMenu: React.FC<MobileMenuProps> = () => {
  const [openDrawer, setOpenDrawer] = useRecoilState(mobileDrawerState)
  return (
    <button
      className="flex items-center justify-center p-1 shadow-md cursor-pointer group focus:opacity-60 md:hidden"
      onClick={() => setOpenDrawer(!openDrawer)}
    >
      <GiHamburgerMenu className="text-[#F0F6FC] text-3xl group-hover:opacity-50" />
    </button>
  )
}
