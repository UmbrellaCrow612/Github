/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import { MdExpandMore } from 'react-icons/md'

import { UserProfileMenu } from './UserProfileMenu'

interface UserProfileProps {}

export const UserProfile: React.FC<UserProfileProps> = () => {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <div className="relative">
      <button
        className="items-center justify-center hidden p-2 cursor-pointer md:flex group"
        onClick={() => setOpenMenu(!openMenu)}
      >
        <img
          src="/images/logo.png"
          alt="user profile"
          loading="lazy"
          className="w-[20px]"
        />
        <MdExpandMore className="text-[#F0F6FC] text-md group-hover:opacity-50" />
      </button>

      <UserProfileMenu open={openMenu} />
    </div>
  )
}
