import { useRecoilValue } from 'recoil'

import { mobileDrawerState } from '../../atoms'
import { SearchInput } from './SearchInput'

interface MobileDrawerProps {}

export const MobileDrawer: React.FC<MobileDrawerProps> = () => {
  const showDrawer = useRecoilValue(mobileDrawerState)
  return (
    <div
      className={`${
        showDrawer
          ? 'h-[500px] scale-y-100 flex bg-[#161B22] border px-3 py-2 text-[#BABBBD]'
          : 'hidden'
      }`}
    >
      {/** Search Input */}
      <div className='w-full h-[45px] flex items-center justify-center'>
        <SearchInput />
      </div>
    </div>
  )
}
