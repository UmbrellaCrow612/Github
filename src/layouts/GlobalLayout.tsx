import { Footer, MobileDrawer, Navigation } from 'components'

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
