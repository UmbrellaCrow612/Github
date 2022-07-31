import { PlusDropDownOptions } from "../values/PlusDropDownOptions"
import { MenuOption } from "./MenuOption"

interface PlusDropDownMenuProps {
  open: boolean
}

export const PlusDropDownMenu: React.FC<PlusDropDownMenuProps> = ({ open }) => {
  return (
    <div
      className={`absolute bg-[#161B22] -left-48 top-7 w-[200px] border-[0.5px] border-[#30363D] shadow-xl hidden h-[190px] rounded-sm flex-col z-10 ${
        open ? 'md:flex' : 'md:hidden'
      }`}
    >
      {PlusDropDownOptions.map((Option) => (
        <MenuOption
          key={Option.title}
          href={Option.href}
          title={Option.title}
        />
      ))}
    </div>
  )
}
