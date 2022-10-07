import type { NextPage } from 'next'
import StaticText from '../components/StaticText'
import Title from '../components/Title'
import WeatherDropdown from '../components/WeatherDropdown'
import { useWeatherContext } from '../context/WeatherContext'

const About: NextPage = () => {
  const { weatherData, currentLocation, handleUpdateWeather } =
    useWeatherContext()
  return (
    <>
      <Title title={'Om oss'} />
      <StaticText />
      <WeatherDropdown
        weatherData={weatherData}
        currentLocation={currentLocation}
        handleUpdateWeather={handleUpdateWeather}
      />
    </>
  )
}

export default About
