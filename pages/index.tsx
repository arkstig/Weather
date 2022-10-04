import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <section>
      <h1>Home page</h1>
      <a>Vanlig anker</a>
      <Link href="/about">
        <a>Client side håndtering</a>
      </Link>
    </section>
  )
}

export default Home
