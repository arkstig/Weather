import { data as weatherData } from '../data'
import { Place } from '../types'

type WeatherDropdownProps = {
  handleUpdateWeather: (place: Place) => void
}

export default function WeatherDropdown({
  handleUpdateWeather,
}: WeatherDropdownProps) {
  if (!weatherData) return null
  return (
    <select
      className="weather"
      data-testid="weather-dropdown"
      value=""
      onChange={(event) => handleUpdateWeather(event.target.value as Place)}
    >
      <option value="" disabled>
        Velg sted
      </option>
      {weatherData.map((data) => (
        <option key={data.id} value={data.place.toLowerCase()}>
          {data.place}
        </option>
      ))}
    </select>
  )
}
