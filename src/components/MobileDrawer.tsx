import { useRecoilValue } from 'recoil'

import { mobileDrawerState } from '../../atoms'

interface MobileDrawerProps {}

export const MobileDrawer: React.FC<MobileDrawerProps> = () => {
  const showDrawer = useRecoilValue(mobileDrawerState)
  return (
    <div
      className={`transition-all ease-in-out duration-300 ${
        showDrawer ? 'h-[300px] scale-y-100 flex' : 'h-[0px] scale-y-0'
      }`}
    >
      Mobile Drawer
    </div>
  )
}
