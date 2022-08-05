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
        <section className="grid h-[1000px] md:h-[700px] grid-cols-1 grid-rows-2 xl:grid-cols-2 xl:grid-rows-1 max-w-screen-2xl mx-auto">
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

      {/** Second hero section */}

      <div className="w-full bg-[#0b0d11] px-10 h-[600px] flex items-center">
        <section className="mx-auto  w-[700px] h-[400px] md:h-[300px] flex flex-col md:flex-row justify-between rounded-xl shadow-xl border-[0.5px] border-black bg-[#ffffff]">
          {/** Top */}
          <div className="py-2 px-3 text-xl font-extrabold text-center text-[#57616A]  md:w-[300px] md:flex md:flex-col md:items-center md:justify-center">
            <h1>Build like the best with GitHub Enterprise</h1>
            <p className="mt-3 text-sm font-thin">
              Take collaboration to the next level with security and
              administrative features built for teams.
            </p>
            {/*Buttons*/}
            <div className="flex flex-col items-center p-3 mt-2">
              <button className="text-base font-bold border-[0.5px] text-black tracking-wide px-6 rounded-md shadow-md mb-3 py-3 border-black hover:border-[1.5px] transition-all">
                Start free trial
              </button>
              <button className="text-base font-bold border-[0.5px] text-black tracking-wide px-6 rounded-md shadow-md py-3 border-black hover:border-[1.5px] transition-all">
                Contact Sales
              </button>
            </div>
          </div>

          {/*Bottom*/}
          <div
            style={{ backgroundImage: 'url(/images/hero-banner-1.webp)' }}
            className="h-[150px] md:h-full bg-contain bg-center md:bg-left-bottom rounded-xl md:w-[55%] bg-no-repeat"
          />
        </section>
      </div>

      {/** Third hero section */}

      <div className="w-full bg-[#0b0d11]">
        <section className="grid grid-cols-1 grid-rows-2 p-1 mx-auto max-w-screen-2xl h-[700px] md:grid-cols-2 md:grid-rows-1">
          {/*Grid 1*/}
          <div className="p-1 text-center md:flex md:flex-col md:items-center md:justify-center">
            <h6 className="text-4xl font-bold text-white md:text-5xl">Give your code a home in the cloud</h6>
            <p className="mt-3 text-2xl text-white md:text-3xl">
              Record or rewind any change to your code to keep you and your team in sync. Host it all for free with unlimited public and private repositories.
            </p>
            <button className="text-white border-[1.2px] border-gray-700 px-8 py-6 rounded-md shadow-xl mt-7 text-xl bg-[#2c2a2a]">
              Sign up to GitHub
            </button>
          </div>
          {/*Grid 2*/}
          <div
            className="bg-center bg-no-repeat bg-contain"
            style={{ backgroundImage: 'url(/images/coding-1.png)' }}
          />
        </section>
      </div>
    </>
  )
}
export default Home
