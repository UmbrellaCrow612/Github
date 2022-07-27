import { PlusDropDown } from './PlusDropDown'
import { UserNotification } from './UserNotification'
import { UserProfileDropDown } from './UserProfileDropDown'

interface NavigationGroupProps {}

export const NavigationGroup: React.FC<NavigationGroupProps> = () => {
  return (
    <div className='flex items-center'>
      <UserNotification />
      <PlusDropDown />
      <UserProfileDropDown />
    </div>
  )
}
