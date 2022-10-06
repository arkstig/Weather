import { DEV_CLIENT_PAGES_MANIFEST } from 'next/dist/shared/lib/constants'
import { data as weatherData } from '../data'

export default function WeatherTable() {
  return (
    <section className="weather-table" data-testid="weather-table">
      <h2>Oversikt</h2>
      <ul>
        {weatherData.map((data) => (
          <li key={data.id}>
            <div>
              <span>{data.place}</span>
              <span>{data.weather}</span>
              <span>{data.temperature}</span>
            </div>
            <button type="button">Velg sted</button>
          </li>
        ))}
      </ul>
    </section>
  )
}
