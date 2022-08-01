import { useState } from 'react'
import { MdExpandMore } from 'react-icons/md'

import { DropDownOptions } from '../values/UnAuthMenuListOptions'

interface UnAuthMobileOptionProps {
  title: string
  href: string
  isDropDown?: boolean
  DropDownOptions?: Array<DropDownOptions>
}

export const UnAuthMobileOption: React.FC<UnAuthMobileOptionProps> = ({
  title,
  href,
  isDropDown,
  DropDownOptions,
}) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="relative">
      <button
        className="mb-1 w-full p-3 group cursor-pointer text-start  border-b-[0.5px] border-gray-700 flex items-center"
        onClick={() => setOpen(!open)}
      >
        <h5 className="group-hover:text-[#575A62] text-[#d2d4d8] text-xl tracking-wide">
          {title}
        </h5>
        {isDropDown ? (
          <MdExpandMore className="group-hover:text-[#575A62] text-[#d2d4d8] text-xl" />
        ) : (
          <></>
        )}

        {/** Is dropdown and will show menu */}
        {isDropDown ? (
          <div
            className={`${
              open
                ? 'bg-[#1d2228] rounded-md shadow-xl absolute top-10 w-[300px] z-10'
                : 'hidden'
            }`}
            key={100}
          >
            hello
          </div>
        ) : (
          <></>
        )}
      </button>
    </div>
  )
}
