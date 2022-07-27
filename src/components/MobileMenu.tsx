import { GiHamburgerMenu } from 'react-icons/gi'
import { useRecoilState } from 'recoil'

import { mobileDrawerState } from '../../atoms'

interface MobileMenuProps {}

export const MobileMenu: React.FC<MobileMenuProps> = () => {
  const [openDrawer, setOpenDrawer] = useRecoilState(mobileDrawerState)
  return (
    <button
      className="cursor-pointer p-1 flex items-center justify-center group focus:opacity-60 shadow-md"
      onClick={() => setOpenDrawer(!openDrawer)}
      onKeyDown={ () => setOpenDrawer(!openDrawer)}
    >
      <GiHamburgerMenu className="text-[#F0F6FC] text-3xl group-hover:opacity-50" />
    </button>
  )
}
