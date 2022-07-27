import { AiOutlinePlus } from 'react-icons/ai'
import { MdExpandMore } from 'react-icons/md'

interface PlusDropDownProps {}

export const PlusDropDown: React.FC<PlusDropDownProps> = () => {
  return (
    <div className="items-center justify-center hidden p-1 cursor-pointer md:flex group">
      <AiOutlinePlus className="text-[#F0F6FC] text-sm group-hover:opacity-50" />
      <MdExpandMore className="text-[#F0F6FC] text-sm group-hover:opacity-50" />
    </div>
  )
}
