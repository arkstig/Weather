import Navigation from './Navigation'

type Props = {
  children: JSX.Element
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <main className="layout">{children}</main>
      <Navigation />
    </>
  )
}

export default Layout
