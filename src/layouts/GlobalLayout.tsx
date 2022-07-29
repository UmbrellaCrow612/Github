import { Footer, MobileDrawer } from 'components'

import { Navigation } from '../components/Nav'

interface GlobalLayoutProps {
  children: React.ReactNode
}

export const GlobalLayout: React.FC<GlobalLayoutProps> = ({ children }) => {
  return (
    <>
      <Navigation />
      <MobileDrawer />
      <main>{children}</main>
      <Footer />
    </>
  )
}
