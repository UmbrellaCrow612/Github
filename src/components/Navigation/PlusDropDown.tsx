import { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { MdExpandMore } from 'react-icons/md'

import { MenuOption } from './UserProfileDropDown'

interface PlusDropDownProps {}

export const PlusDropDown: React.FC<PlusDropDownProps> = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="relative">
      <button
        className="items-center justify-center hidden p-1 cursor-pointer md:flex group"
        onClick={() => setOpen(!open)}
      >
        <AiOutlinePlus className="text-[#F0F6FC] text-sm group-hover:opacity-50" />
        <MdExpandMore className="text-[#F0F6FC] text-sm group-hover:opacity-50" />
      </button>

      {/** Menu */}

      <div
        className={`absolute bg-[#161B22] -left-48 top-7 w-[200px] border-[0.5px] border-[#30363D] shadow-xl hidden h-[190px] rounded-sm flex-col z-10 ${
          open ? 'md:flex' : 'md:hidden'
        }`}
      >
        {MenuItems.map((Option) => (
          <MenuOption
            key={Option.title}
            href={Option.href}
            title={Option.title}
          />
        ))}
      </div>
    </div>
  )
}

const MenuItems: {
  title: string
  href: string
  borderBottom?: boolean
  borderTop?: boolean
}[] = [
  {
    title: 'New repository',
    href: '',
  },
  {
    title: 'Import repository',
    href: '',
  },
  {
    title: 'New gist',
    href: '',
  },
  {
    title: 'New organization',
    href: '',
  },
  {
    title: 'New project',
    href: '',
  },
]
