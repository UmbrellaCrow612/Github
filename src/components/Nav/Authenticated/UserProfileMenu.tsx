import Link from 'next/link'

import { BsEmojiSmile } from 'react-icons/bs'

import {
  UserProfileOptionsThree,
  UserProfileOptionsTwo,
  authUserProfileOptionsOne,
} from '../values/authUserProfileOptions'
import { MenuOption } from './MenuOption'

interface UserProfileMenuProps {
  open: boolean
}

export const UserProfileMenu: React.FC<UserProfileMenuProps> = ({ open }) => {
  return (
    <div
      className={`absolute bg-[#161c25] hidden top-10 -left-40 w-[180px] rounded-md z-10 border border-[#30363D] shadow-xl h-[550px] ${
        open ? 'md:block' : 'md:hidden'
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
          <p className="text-sm text-gray-500 font-base group-hover:text-blue-500">
            Set status
          </p>
        </button>
      </div>

      {/** Options 1*/}

      <div className="py-1">
        {authUserProfileOptionsOne.map((Option) => (
          <MenuOption
            key={Option.title}
            href={Option.href}
            title={Option.title}
            borderBottom={Option.borderBottom}
          />
        ))}
      </div>

      {/** Options 2 */}

      <div>
        {UserProfileOptionsTwo.map((Option) => (
          <MenuOption
            key={Option.title}
            href={Option.href}
            title={Option.title}
            borderBottom={Option.borderBottom}
          />
        ))}
      </div>

      {/** Options 3 */}
      <div>
        {UserProfileOptionsThree.map((Option) => (
          <MenuOption
            key={Option.title}
            href={Option.href}
            title={Option.title}
            borderBottom={Option.borderBottom}
          />
        ))}
      </div>
    </div>
  )
}
