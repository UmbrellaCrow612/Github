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
      Hello world
    </>
  )
}
export default Home
