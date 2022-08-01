import { useRecoilValue } from 'recoil'

import { unAuthMobileDrawerState } from '../../../atoms'

interface UnAuthMobileDrawerProps {}

export const UnAuthMobileDrawer: React.FC<UnAuthMobileDrawerProps> = () => {
  const openUnAuthDrawer = useRecoilValue(unAuthMobileDrawerState)
  return (
    <div className={`${openUnAuthDrawer ? 'flex bg-white' : 'hidden'}`}>
      Un Auth
    </div>
  )
}
