/* eslint-disable @next/next/no-img-element */
import { MdExpandMore } from 'react-icons/md'

interface UserProfileDropDownProps {}

export const UserProfileDropDown: React.FC<UserProfileDropDownProps> = () => {
  return (
    <div className="items-center justify-center hidden p-2 cursor-pointer md:flex group">
      <img
        src="/images/logo.png"
        alt="user profile"
        loading="lazy"
        className="w-[20px]"
      />
      <MdExpandMore className="text-[#F0F6FC] text-md group-hover:opacity-50" />
    </div>
  )
}
