import { useRecoilValue } from 'recoil'

import { UnAuthMobileOption } from 'components/Nav/UnAuthenticated/UnAuthMobileOption'

import { unAuthMobileDrawerState } from '../../../atoms'
import { UnAuthMenuListOptions } from '../Nav/values/UnAuthMenuListOptions'
import { SearchInput } from 'components/SearchInput'

interface UnAuthMobileDrawerProps {}

export const UnAuthMobileDrawer: React.FC<UnAuthMobileDrawerProps> = () => {
  const openUnAuthDrawer = useRecoilValue(unAuthMobileDrawerState)
  return (
    <div
      className={`${
        openUnAuthDrawer
          ? 'flex flex-col px-4 bg-[#0D1116] transition-all p-1 border-[0.5px] border-[#30363D] shadow-xl  md:hidden'
          : 'hidden'
      }`}
    >
      {UnAuthMenuListOptions.map((Option) => (
        <UnAuthMobileOption
          title={Option.title}
          href={Option.href}
          key={Option.title}
          isDropDown={Option.isDropDown}
          DropDownOptions={Option.DropDownOptions}
        />
      ))}

      <div className='mt-4 h-[50px]'>
        <SearchInput />
      </div>
    </div>
  )
}
