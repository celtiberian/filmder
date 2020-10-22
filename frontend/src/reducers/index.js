import React from 'react'

const coreReducer = (state, action) => {
  return state
}

const init = () => {

}

export const useCoreReducer = () => {
   return React.useReducer(coreReducer, init)
}
