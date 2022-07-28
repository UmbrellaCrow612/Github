/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';



import { useState } from 'react'
import { BsEmojiSmile } from 'react-icons/bs'
import { MdExpandMore } from 'react-icons/md';


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
          className="w-[20px]"
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

        {/** Set status */}

        <div className="border-t-[0.5px] border-b-[0.5px] h-[45px] flex items-center justify-center border-[#393f47] mt-2">
          <button className="flex items-center justify-start border-[0.5px] py-1 w-[150px] px-2 rounded-md border-[#31383f] shadow-md group bg-[#1a2028]">
            <BsEmojiSmile className="mr-2 text-sm text-gray-500 group-hover:text-blue-500" />
            <p className="text-sm text-gray-500 font-base group-hover:text-blue-500">Set status</p>
          </button>
        </div>
      </div>
    </div>
  )
}