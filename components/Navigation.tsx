import Link from 'next/link'

const Navigation = () => {
  return (
    <nav className="navigation">
      <Link href="/" passHref>
        <a>Hjem</a>
      </Link>

      <Link href="/about">
        <a className="first">About</a>
      </Link>

      <Link href="/contact">
        <a className="first">Contact</a>
      </Link>
    </nav>
  )
}

export default Navigation
