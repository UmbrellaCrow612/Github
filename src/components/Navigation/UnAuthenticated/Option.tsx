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
    <div key={title}>
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
          className={`absolute shadow-xl border-[0.5px] border-gray-700 bg-[#1c2229] rounded-md w-[300px] flex-col items-start z-20 ${
            open ? 'flex' : 'hidden'
          }`}
        >
          <div className="px-6 mb-4 mt-9">
            {DropDownOptions?.map((Option) => (
              <Link href={`/${Option.href}`} key={Option.title}>
                <a>
                  <button
                    key={Option.title}
                    className={`w-full p-1 mb-1 text-start  hover:text-blue-600 text-[#8B959E] ${
                      Option.bold
                        ? 'font-semibold text-[#C8D2D9]'
                        : 'font-normal'
                    }  ${
                      Option.borderBottom
                        ? 'border-b-[0.5px] border-y-gray-700'
                        : ''
                    }  ${
                      Option.borderTop
                        ? 'border-t-[0.5px] border-y-gray-700'
                        : ''
                    }`}
                  >
                    {Option.title}
                  </button>
                </a>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <></>
      )}

      {/** Click away listener */}
      {open ? (
        <div
          className="fixed top-0 left-0 w-full h-full mt-[75px] z-10"
          onClick={() => setOpen(!open)}
          onMouseOver={() => setOpen(!open)}
        />
      ) : (
        <></>
      )}
    </div>
  )
}
