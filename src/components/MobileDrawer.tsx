import Link from 'next/link'

import { useRecoilValue } from 'recoil'

import { mobileDrawerState } from '../../atoms'
import { SearchInput } from './SearchInput'

interface MobileDrawerProps {}
interface DrawerOptionProps {
  option: string
}

export const MobileDrawer: React.FC<MobileDrawerProps> = () => {
  const showDrawer = useRecoilValue(mobileDrawerState)
  return (
    <div
      className={`${
        showDrawer
          ? 'h-[450px] scale-y-100 flex bg-[#161B22] border px-3 py-2 flex-col'
          : 'hidden'
      }`}
    >
      {/** Search Input */}
      <div className="w-full h-[45px] flex items-center justify-center mb-4">
        <SearchInput />
      </div>

      {/** Drawer Options */}

      <div className="h-full">
        {Options.map((option) => (
          <DrawerOption option={option} key={option} />
        ))}

        {/** User */}
      </div>
    </div>
  )
}

const DrawerOption: React.FC<DrawerOptionProps> = ({ option }) => {
  return (
    <Link href={`/${option.toLowerCase()}`}>
      <a>
        <div className="border-t-[0.4px] text-md flex items-center h-[40px] cursor-pointer group border-[#3A3D43]">
          <h6 className="group-hover:opacity-90 transition-all ease-in-out text-[#F0F6FC] group-hover:text-[#BABBBD] font-medium tracking-wide">
            {option}
          </h6>
        </div>
      </a>
    </Link>
  )
}
const Options = [
  'Dashboard',
  'Pull requests',
  'Issues',
  'Marketplace',
  'Explore',
  'Codespaces',
  'Sponsors',
  'Settings',
]
