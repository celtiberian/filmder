import React from 'react'
import store from 'store2'

const coreReducer = (state, action) => {
  return state
}

const init = () => {
  const username = store.get('username') || ''
  return {
    username,
  }
}

export const useCoreReducer = () => {
  return React.useReducer(coreReducer, init)
}
