import { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { MdExpandMore } from 'react-icons/md'

import { PlusDropDownMenu } from './PlusDropDownMenu'

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

      <PlusDropDownMenu open={open} />
    </div>
  )
}
