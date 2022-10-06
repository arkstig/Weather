import React, { useEffect, useState } from 'react'

type FormData = { name: string; email: string }

type FormProps = {
  handleSubmit: ({ name, email }: FormData) => void
}

const isValid = ({ name, email }: FormData) => {
  return name && name.length > 2 && email.includes('@')
}

export default function Form({ handleSubmit }: FormProps) {
  const [data, setData] = useState({ email: '', name: '' })
  const [error, setError] = useState('')
  const [isDirty, setDirty] = useState(false)

  useEffect(() => {
    if (!isValid(data) && isDirty) {
      setError('Navn og / eller e-post er ikke gyldig')
    } else {
      setError('')
    }
  }, [data, isDirty])

  const handleData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const id = event.target?.id
    if (id && Object.keys(data).includes(id)) {
      setDirty(true)
      setData((prev) => ({ ...prev, [id]: event.target.value }))
    }
  }

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (isValid(data)) {
      handleSubmit(data)
    }
  }

  return (
    <form className="comment" onSubmit={handleFormSubmit}>
      <label htmlFor="name">
        <input
          onChange={handleData}
          value={data.name}
          type="text"
          placeholder="Navn"
          id="name"
          data-testid="name"
        ></input>
      </label>
      <label htmlFor="email">
        <input
          onChange={handleData}
          value={data.email}
          type="text"
          placeholder="Email"
          id="email"
          data-testid="email"
        ></input>
      </label>

      <input id="place" data-testid="place" disabled type="text" />
      {error ? (
        <span className="error" data-testid="error">
          {error}
        </span>
      ) : null}
      <button>Send</button>
    </form>
  )
}
