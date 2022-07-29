interface UnAuthenticatedProps {}

export const UnAuthenticated: React.FC<UnAuthenticatedProps> = () => {
  return (
    <header>
      <nav className="max-w-screen-2xl mx-auto h-[85px] flex items-center justify-between px-3 bg-[#161B22] md:h-[70px] sticky top-0 z-10"></nav>
    </header>
  )
}
