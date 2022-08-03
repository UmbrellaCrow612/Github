import Link from 'next/link'

import { useEffect, useState } from 'react'
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
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(false)
  }, [])



  if (loading) return <h1>Loading</h1>

  return (
    <div className="relative">

      <Link href={`/${href}`} key={title}>
        <a>
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
          </button>
        </a>
      </Link>


      {/** Is dropdown and will show menu */}
      {isDropDown ? (
        <div
          className={`${
            open
              ? 'bg-[#1d2228] rounded-md shadow-xl absolute top-10 w-[300px] z-20'
              : 'hidden'
          }`}
          key={100}
        >
          {DropDownOptions?.map((Option) => (

            <Link href={`/${Option.href}`} key={Option.title}>
              <a>
                <button
                  className={`w-full p-2 text-gray-300 text-start hover:text-gray-400 ${
                    Option.bold ? 'font-bold' : ''
                  } ${
                    Option.borderBottom
                      ? 'border-b-[0.5px] border-gray-600'
                      : ''
                  }`}
                  key={Option.title}
                >
                  {Option.title}
                </button>
              </a>
            </Link>

          ))}
        </div>
      ) : (
        <></>
      )}


      {/** Click away listener */}
      {open ? (
        <div
          className="fixed w-full h-full z-10 top-0 left-0"
          onClick={() => setOpen(!open)}
        />
      ) : (
        <></>
      )}

    </div>
  )
}
