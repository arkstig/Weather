export default function Form() {
  return (
    <form className="comment">
      <label htmlFor="name">
        <input
          type="text"
          placeholder="Navn"
          id="name"
          data-testid="name"
        ></input>
      </label>
      <label htmlFor="email">
        <input
          type="text"
          placeholder="Email"
          id="email"
          data-testid="email"
        ></input>
      </label>
      <input id="place" data-testid="place" disabled type="text" />
      <button>Send</button>
    </form>
  )
}
