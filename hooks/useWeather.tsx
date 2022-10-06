import { useState } from 'react'
import { data } from '../data'
import { Place, WeatherData } from '../types'

export default function useWeather(initialData?: WeatherData[]) {
  const [weatherData, setWeatherData] = useState(initialData)
  const [weather, setWeather] = useState<WeatherData | undefined>(null)
  const currentLocation = weather?.place?.toLowerCase() as Place

  const handleUpdateWeather = (place: Place) => {
    if (!weatherData) return
    const updatedWeather = weatherData.find(
      (data) => data.place.toLowerCase() == place.toLowerCase()
    )
    if (updatedWeather) {
      setWeather(updatedWeather)
    }
  }
  return {
    handleUpdateWeather,
    weather,
    setWeatherData,
    currentLocation,
    weatherData,
  }
}
