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

      <section className="grid min-h-screen grid-cols-1 grid-rows-2 bg-[#0d0e11]">
        {/** Grid 1 */}
        <div className="border text-center flex items-center justify-center flex-col">
          <h4 className="text-4xl font-extrabold tracking-wide text-[#FFFFFF] mb-2">
            Let&apos;s build from here, together.
          </h4>
          <p className="text-[#dfdfdf] text-xl tracking-wide">
            The complete developer platform to build, scale, and deliver secure
            software.
          </p>

          <div className="flex w-full flex-col px-4 mt-5">
            <input
              type="text"
              placeholder="Email address"
              className="p-3 px-4 rounded-md bg-[#ffffff] shadow-xl placeholder:text-xl placeholder:text-[#6E7881] placeholder:tracking-wide"
            />
            <button className="bg-[#2CA64E] p-3 mt-2 rounded-md shadow-xl">
              <p className="text-white font-bold tracking-wide">
                Sign up for GitHub
              </p>
            </button>
          </div>
        </div>
        {/** Grid 2 */}

        <div className="border">grid 2</div>
      </section>
    </>
  )
}
export default Home
