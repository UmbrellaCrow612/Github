import { useSession } from 'next-auth/react'

import { Footer, MobileDrawer, Navigation, UnAuthNavigation } from 'components'

interface GlobalLayoutProps {
  children: React.ReactNode
}

export const GlobalLayout: React.FC<GlobalLayoutProps> = ({ children }) => {
  const { data: session } = useSession()
  return (
    <>
      {session ? <Navigation /> : <UnAuthNavigation />}
      <MobileDrawer />
      <main>{children}</main>
      <Footer />
    </>
  )
}
