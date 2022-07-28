/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

interface LogoProps {}

export const Logo: React.FC<LogoProps> = () => {
  return (
    <Link href="/">
      <a>
        <div className="bg-[#F0F6FC] rounded-full border flex items-center justify-center cursor-pointer hover:scale-110 transition-all">
          <img
            src="/images/logo.png"
            alt="GitHub"
            className="w-[45px] md:w-[35px]"
          />
        </div>
      </a>
    </Link>
  )
}
