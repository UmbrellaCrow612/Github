import { UserNotification } from './UserNotification'

interface NavigationGroupProps {}

export const NavigationGroup: React.FC<NavigationGroupProps> = () => {
  return (
    <div>
      <UserNotification />
    </div>
  )
}
