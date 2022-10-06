import type { NextPage } from 'next'
import StaticText from '../components/StaticText'
import Title from '../components/Title'
import WeatherDropdown from '../components/WeatherDropdown'

const About: NextPage = () => {
  return (
    <>
      <Title title={'Om oss'} />
      <StaticText />
      <WeatherDropdown />
    </>
  )
}

export default About
