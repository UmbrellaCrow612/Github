import { useSession } from 'next-auth/react'

import {
  Footer,
  MobileDrawer,
  UnAuthMobileDrawer,
} from 'components'

import { Navigation } from '../components'

interface GlobalLayoutProps {
  children: React.ReactNode
}

export const GlobalLayout: React.FC<GlobalLayoutProps> = ({ children }) => {
  const { data: session } = useSession()
  return (
    <>
      <Navigation />
      {session ? <MobileDrawer /> : <UnAuthMobileDrawer />}
      <main>{children}</main>
      <Footer />
    </>
  )
}
