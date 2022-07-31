import { useSession } from 'next-auth/react'

import { Authenticated } from './Authenticated/Authenticated'
import { UnAuthenticated } from './UnAuthenticated/UnAuthenticated'

interface NavigationProps {}

export const Navigation: React.FC<NavigationProps> = () => {
  const { data: session } = useSession()
  return <>{session ? <Authenticated /> : <UnAuthenticated />}</>
}
