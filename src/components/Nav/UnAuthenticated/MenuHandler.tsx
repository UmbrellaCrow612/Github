import { AiOutlineMenu } from 'react-icons/ai'

interface MenuHandlerProps {}

export const MenuHandler: React.FC<MenuHandlerProps> = () => {
  return (
    <button className="p-2 cursor-pointer md:hidden">
      <AiOutlineMenu className="text-2xl text-white" />
    </button>
  )
}
