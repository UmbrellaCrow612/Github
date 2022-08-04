import { signIn } from "next-auth/react"

interface AuthActionsProps {}

export const AuthActions: React.FC<AuthActionsProps> = () => {
  return (
    <div className="flex items-center justify-between p-2 md:p-1">
      <button className="p-2 border-[0.5px] border-[#383e46] rounded-md text-sm bg-[#161B22] shadow-xl text-[#eae9e9] md:mr-1">
        Sign up
      </button>
      <button className="p-2 rounded-md text-sm text-[#eae9e9] hidden md:flex" onClick={() => signIn()}>
        Sign in
      </button>
    </div>
  )
}
