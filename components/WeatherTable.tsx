export default function WeatherTable() {
  return (
    <section className="weather-table" data-testid="weather-table">
      <h2>Oversikt</h2>
      <ul>
        <li>
          <div>
            <span>place</span>
            <span>Vær</span>
            <span>Temperatur</span>
          </div>
          <button type="button">Velg sted</button>
        </li>
      </ul>
    </section>
  )
}
