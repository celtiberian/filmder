import React from 'react'
import store from 'store2'
import { CORE_ACTIONS } from '../actions/actionNames'

const handlers = {
  [CORE_ACTIONS.SET_USERNAME]: (state, { payload }) => {
    const { name } = payload
    store.set('username', name)
    return { ...state, username: name }
  },
}

const coreReducer = (state, action) => {
  const fn = handlers[action.type]
  if (fn) {
    state = fn(state, action)
  }
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
