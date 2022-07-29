import { UnAuthMenuListOptions } from '../values/UnAuthMenuListOptions'
import { Option } from './Option';


interface HeaderOptionsProps {}

export const HeaderOptions: React.FC<HeaderOptionsProps> = () => {
  return (
    <div className="hidden xl:flex items-center justify-between p-1 ml-2 w-[520px]">
      {UnAuthMenuListOptions.map((Value) => (
        <Option
          title={Value.title}
          href={Value.href}
          key={Value.title}
          DropDownOptions={Value.DropDownOptions}
          isDropDown={Value.isDropDown}
        />
      ))}
    </div>
  )
}