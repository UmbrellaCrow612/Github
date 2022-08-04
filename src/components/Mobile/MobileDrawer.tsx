/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

import { FiLogOut } from 'react-icons/fi'
import { useRecoilValue } from 'recoil'

import { mobileDrawerState } from '../../../atoms'
import { SearchInput } from '../SearchInput'

interface MobileDrawerProps {}

interface DrawerOptionProps {
  option: string
  href: string
  userOption?: boolean
  logOut?: boolean
}

export const MobileDrawer: React.FC<MobileDrawerProps> = () => {
  const showDrawer = useRecoilValue(mobileDrawerState)
  return (
    <div
      className={`${
        showDrawer
          ? 'h-[470px] scale-y-100 flex bg-[#161B22] px-3 py-2 flex-col md:hidden'
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
          <DrawerOption
            option={option.title}
            key={option.title}
            href={option.href}
          />
        ))}

        {/** User info pulled here*/}
        <DrawerOption option="h" key={1} href="to user name" userOption />

        {/** Log out pass href as signOut from Next Auth*/}
        <DrawerOption option="log out" key={10} href="/api/auth/signout" logOut />
      </div>
    </div>
  )
}

const DrawerOption: React.FC<DrawerOptionProps> = ({
  option,
  href,
  userOption,
  logOut,
}) => {
  return (
    <Link href={`/${href}`}>
      <a>
        <div className="border-t-[0.4px] text-md flex items-center h-[40px] cursor-pointer group border-[#3A3D43]">
          {userOption ? (
            <img
              src="/images/logo.png"
              alt="User profile"
              className="w-[20px] mr-3"
              loading="lazy"
            />
          ) : (
            <></>
          )}
          {logOut ? (
            <FiLogOut className="group-hover:opacity-90 transition-all ease-in-out text-[#F0F6FC] group-hover:text-[#BABBBD] font-medium mr-4" />
          ) : (
            <></>
          )}
          <h6 className="group-hover:opacity-90 transition-all ease-in-out text-[#F0F6FC] group-hover:text-[#BABBBD] font-medium tracking-wide">
            {option}
          </h6>
        </div>
      </a>
    </Link>
  )
}

const Options: {
  title: string
  href: string
}[] = [
  {
    title: 'Dashboard',
    href: 'Dashboard',
  },
  {
    title: 'Pull requests',
    href: 'Pull',
  },
  {
    title: 'Issues',
    href: 'Issues',
  },
  {
    title: 'Marketplace',
    href: 'Marketplace',
  },
  {
    title: 'Explore',
    href: 'Explore',
  },
  {
    title: 'Codespaces',
    href: 'Codespaces',
  },
  {
    title: 'Sponsors',
    href: 'Sponsors',
  },
  {
    title: 'Settings',
    href: 'Settings',
  },
]
