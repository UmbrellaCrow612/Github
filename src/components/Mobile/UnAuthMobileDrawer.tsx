import { useRecoilValue } from 'recoil'

import { UnAuthMobileOption } from 'components/Navigation/UnAuthenticated/UnAuthMobileOption'
import { SearchInput } from 'components/SearchInput'

import { unAuthMobileDrawerState } from '../../../atoms'
import { UnAuthMenuListOptions } from '../Navigation/values/UnAuthMenuListOptions'

interface UnAuthMobileDrawerProps {}

export const UnAuthMobileDrawer: React.FC<UnAuthMobileDrawerProps> = () => {
  const openUnAuthDrawer = useRecoilValue(unAuthMobileDrawerState)
  return (
    <div
      className={`${
        openUnAuthDrawer
          ? 'flex flex-col px-4 bg-[#0D1116] transition-all p-1 border-[0.5px] border-[#30363D] shadow-xl  md:hidden -z-10'
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

      <div className="mt-4 h-[50px]">
        <SearchInput />
      </div>

      {/** Custom sign in button */}

      <button className="bg-[#161B22] h-[50px] mt-4 mb-2 rounded-sm shadow-xl text-[#d1cdcd] text-xl tracking-wide border-[0.5px] border-gray-600">
        Sign in
      </button>
    </div>
  )
}
