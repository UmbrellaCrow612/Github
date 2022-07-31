import Link from 'next/link'

import { useState } from 'react'
import { MdExpandMore } from 'react-icons/md'

import { DropDownOptions } from '../values/UnAuthMenuListOptions'

interface OptionProps {
  title: string
  href: string
  isDropDown?: boolean
  DropDownOptions?: Array<DropDownOptions>
}

export const Option: React.FC<OptionProps> = ({
  title,
  href,
  isDropDown,
  DropDownOptions,
}) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="" key={title}>
      <div className="relative">
        <Link href={`/${href}`}>
          <a>
            <button
              className="flex items-center text-base tracking-wide group"
              onClick={() => setOpen(!open)}
            >
              <p className="text-white group-hover:text-opacity-60">{title}</p>

              {isDropDown ? (
                <MdExpandMore className="ml-1 text-white group-hover:text-opacity-60" />
              ) : (
                <></>
              )}
            </button>
          </a>
        </Link>
      </div>
      {/** Menu Optional*/}
      {isDropDown ? (
        <div
          className={`absolute shadow-xl border-[0.5px] border-gray-700 bg-[#1c2229] rounded-md w-[300px] h-[520px] flex-col items-start ${
            open ? 'flex' : 'hidden'
          }`}
        >
          <div className="px-6 mt-9">
            {DropDownOptions?.map((Option) => (
              <button
                key={Option.title}
                className={`w-full p-1 mb-1 text-start  hover:text-blue-600 text-[#8B959E] ${
                  Option.bold ? 'font-semibold text-[#C8D2D9]' : 'font-normal'
                }  ${
                  Option.borderBottom
                    ? 'border-b-[0.5px] border-y-gray-700'
                    : ''
                }`}
              >
                {Option.title}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}
