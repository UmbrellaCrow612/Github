import { authNavOptions } from "../values/authNavOptions"
import { HeaderOption } from "./HeaderOption"

interface HeaderOptionsProps {}

export const HeaderOptions: React.FC<HeaderOptionsProps> = () => {
  return (
    <div className="ml-1 w-[290px] hidden md:flex items-center justify-between px-3">
      {authNavOptions.map((option) => (
        <HeaderOption
          href={option.href}
          title={option.title}
          key={option.title}
        />
      ))}
    </div>
  )
}
