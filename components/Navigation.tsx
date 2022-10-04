import Link from 'next/link'

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link href="/" passHref>
            <a>Hjem</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a className="first">About</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a className="first">Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
