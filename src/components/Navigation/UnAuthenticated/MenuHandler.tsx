import { AiOutlineMenu } from 'react-icons/ai'
import { useRecoilState } from 'recoil'

import { unAuthMobileDrawerState } from '../../../../atoms'

interface MenuHandlerProps {}

export const MenuHandler: React.FC<MenuHandlerProps> = () => {
  const [openUnAuthDrawer, setOpenUnAuthDrawer] = useRecoilState(
    unAuthMobileDrawerState
  )
  return (
    <button
      className="p-2 cursor-pointer md:hidden"
      onClick={() => setOpenUnAuthDrawer(!openUnAuthDrawer)}
    >
      <AiOutlineMenu className="text-2xl text-white" />
    </button>
  )
}
