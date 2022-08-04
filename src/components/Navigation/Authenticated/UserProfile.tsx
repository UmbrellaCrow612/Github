/* eslint-disable @next/next/no-img-element */
import { useSession } from 'next-auth/react'

import { useState } from 'react'
import { MdExpandMore } from 'react-icons/md'

import { UserProfileMenu } from './UserProfileMenu'

interface UserProfileProps {}

export const UserProfile: React.FC<UserProfileProps> = () => {
  const [openMenu, setOpenMenu] = useState(false)

  const { data: session } = useSession()
  return (
    <div className="relative">
      <button
        className="items-center justify-center hidden p-2 cursor-pointer md:flex group"
        onClick={() => setOpenMenu(!openMenu)}
      >
        <img
          src={`${session?.user?.image || "/images/logo.png"}`}
          alt={`${session?.user?.name}`}
          loading="lazy"
          className="w-[20px] rounded-full"
        />
        <MdExpandMore className="text-[#F0F6FC] text-md group-hover:opacity-50" />
      </button>

      <UserProfileMenu open={openMenu} />
    </div>
  )
}
