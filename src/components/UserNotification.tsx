import { IoIosNotificationsOutline } from 'react-icons/io'

interface UserNotificationProps {}

export const UserNotification: React.FC<UserNotificationProps> = () => {
  return (
    <div className="p-1 flex items-center justify-center cursor-pointer group transition-all ease-in-out duration-150">
      <IoIosNotificationsOutline className="text-[#F0F6FC] text-2xl group-hover:opacity-50" />
    </div>
  )
}
