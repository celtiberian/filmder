import React from 'react'
import { setName } from '../actions'
import { useCoreContext } from '../contexts'

export const WelcomeView = () => {
  const [, dispatch] = useCoreContext()
  const [name, setLocalName] = React.useState('')

  const onChange = (evt) => {
    setLocalName(evt.target.value)
  }

  const onSubmit = (evt) => {
    evt.preventDefault()
    dispatch(setName(name))
  }

  return (
    <div>
      <h2>Welcome</h2>
      <form onSubmit={onSubmit}>
        <input
          required
          value={name}
          onChange={onChange}
          placeholder="Enter username..."
        />
      </form>
    </div>
  )
}
