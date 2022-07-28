/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

import { useState } from 'react'
import { MdExpandMore } from 'react-icons/md'

interface UserProfileDropDownProps {}

export const UserProfileDropDown: React.FC<UserProfileDropDownProps> = () => {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <div className="relative">
      <button
        className="items-center justify-center hidden p-2 cursor-pointer md:flex group"
        onClick={() => setOpenMenu(!openMenu)}
        onKeyDown={() => setOpenMenu(!openMenu)}
      >
        <img
          src="/images/logo.png"
          alt="user profile"
          loading="lazy"
          className="w-[20px] h-[20px]"
        />
        <MdExpandMore className="text-[#F0F6FC] text-md group-hover:opacity-50" />
      </button>
      {/** Menu */}
      <div
        className={`absolute bg-[#161c25] hidden top-10 -left-40 w-[185px] rounded-md z-10 border border-[#30363D] shadow-xl h-[400px] ${
          openMenu ? 'md:block' : 'md:hidden'
        }`}
      >
        <Link href="/">
          <a>
            <div className="h-[50px] py-2 px-3">
              <h6 className="text-sm text-[#fcfcfc] tracking-wide mb-1">
                Signed in as
              </h6>
              <h5 className="text-base text-[#fcfcfc] tracking-wide">
                Umbrella Man
              </h5>
            </div>
          </a>
        </Link>
      </div>
    </div>
  )
}
