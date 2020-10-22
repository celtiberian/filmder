import React from 'react'
import { useCoreReducer } from '../reducers'
import { setName } from '../actions'

export const WelcomeView = () => {
  const [, dispatch] = useCoreReducer()
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
        <input required value={name} onChange={onChange} />
      </form>
    </div>
  )
}
