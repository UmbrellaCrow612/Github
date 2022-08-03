import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { useEffect } from 'react'

const Home: NextPage = () => {
  const router = useRouter()

  useEffect(() => {
    router.replace('/home', '/', { shallow: true })
  }, [router])
  return (
    <>
      <Head>
        <title>GitHub: Where the world builds software · GitHub</title>
        <meta
          name="description"
          content="GitHub is where over 83 million developers shape the future of software, together. Contribute to the open source community, manage your Git repositories, ..."
        />
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>

      {/** First hero section */}

      <div className="w-full bg-[#0b0d11]">
        <section className="grid h-[1000px] md:h-[700px] grid-cols-1 grid-rows-2 xl:grid-cols-2 xl:grid-rows-1 max-w-screen-2xl mx-auto ">
          {/** Grid 1 */}
          <div className="flex flex-col items-center justify-center text-center">
            <h4 className="text-4xl font-extrabold tracking-wide text-[#FFFFFF] mb-2 xl:text-5xl">
              Let&apos;s build from here, together.
            </h4>
            <p className="text-[#dfdfdf] text-xl tracking-wide xl:text-2xl">
              The complete developer platform to build, scale, and deliver
              secure software.
            </p>

            <div className="flex flex-col w-full px-4 mt-5 md:w-[600px] md:mx-auto">
              <input
                type="text"
                placeholder="Email address"
                className="p-3 px-4 rounded-md bg-[#ffffff] shadow-xl placeholder:text-xl placeholder:text-[#6E7881] placeholder:tracking-wide text-gray-500"
              />
              <button className="bg-[#2CA64E] p-3 mt-2 rounded-md shadow-xl">
                <p className="font-bold tracking-wide text-white">
                  Sign up for GitHub
                </p>
              </button>
            </div>
          </div>
          {/** Grid 2 */}

          <div className="flex flex-wrap items-center justify-between px-8 text-center">
            <div className="p-2"> 
              <p className="text-2xl text-white">83+ million</p>
              <span className="text-sm text-gray-300">Developers</span>
            </div>
             <div className="p-2"> 
              <p className="text-2xl text-white">4+ million</p>
              <span className="text-sm text-gray-300">Organizations</span>
            </div>
            <div className="p-2"> 
              <p className="text-2xl text-white">200+ million</p>
              <span className="text-sm text-gray-300">Repositories</span>
            </div>
            <div className="p-2"> 
              <p className="text-2xl text-white">90%</p>
              <span className="text-sm text-gray-300">Fortune 100</span>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
export default Home
