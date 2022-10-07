import type { NextPage } from 'next'
import StaticText from '../components/StaticText'
import Title from '../components/Title'
import WeatherDropdown from '../components/WeatherDropdown'
import WeatherTable from '../components/WeatherTable'
import { useWeatherContext } from '../context/WeatherContext'

const Home: NextPage = () => {
  const { weatherData, currentLocation, handleUpdateWeather } =
    useWeatherContext()
  return (
    <>
      <Title title={'Velkommer til oversikten over været'} />
      <StaticText />
      <WeatherDropdown
        weatherData={weatherData}
        currentLocation={currentLocation}
        handleUpdateWeather={handleUpdateWeather}
      />
      <WeatherTable
        weatherData={weatherData}
        currentLocation={currentLocation}
        handleUpdateWeather={handleUpdateWeather}
      />
    </>
  )
}

export default Home
