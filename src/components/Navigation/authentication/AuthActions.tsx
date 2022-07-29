interface AuthActionsProps {}

export const AuthActions: React.FC<AuthActionsProps> = () => {
  return (
    <div className="">
       <button className="p-2 text-sm text-white hover:text-opacity-70">
        Sign In
      </button>
      <button className="p-2 border-[0.5px] border-[#30363D] rounded-md text-sm text-white shadow-xl">
        Sign up
      </button>
    </div>
  )
}
