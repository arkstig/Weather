import type { NextPage } from 'next'
import StaticText from '../components/StaticText'
import Title from '../components/Title'
import WeatherDropdown from '../components/WeatherDropdown'
import WeatherTable from '../components/WeatherTable'

const Home: NextPage = () => {
  return (
    <>
      <Title title={'Velkommer til oversikten over været'} />
      <StaticText />
      <WeatherDropdown />
      <WeatherTable />
    </>
  )
}

export default Home
