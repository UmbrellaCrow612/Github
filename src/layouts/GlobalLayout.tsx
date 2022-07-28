import { Footer, MobileDrawer, Navigation } from 'Components'

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
