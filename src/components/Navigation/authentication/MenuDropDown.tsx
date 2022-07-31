import Link from 'next/link'

import { useState } from 'react'
import { MdExpandMore } from 'react-icons/md'

import { DropDownOptions } from './UnAuthMenuList'

interface MenuDropDownProps {
  title: string
  href: string
  isDropDown?: boolean
  DropDownOptions?: Array<DropDownOptions>
}

export const MenuDropDown: React.FC<MenuDropDownProps> = ({
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
      {isDropDown ? (
        <div className={`absolute bg-white ${open ? 'flex' : 'hidden'}`}>
        Hello
      </div>
      ): (
      <></>
      )}
      
    </div>
  )
}
