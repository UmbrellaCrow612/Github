import { IoIosNotificationsOutline } from 'react-icons/io'

interface NotificationProps {}

export const Notification: React.FC<NotificationProps> = () => {
  return (
    <button className="p-1 flex items-center justify-center cursor-pointer group">
      <IoIosNotificationsOutline className="text-[#F0F6FC] text-2xl group-hover:opacity-50" />
    </button>
  )
}
