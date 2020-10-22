import React from 'react'
import { useCoreReducer } from '../reducers'

const CoreContext = React.createContext()

export const CoreContextProvider = ({ children }) => {
  const stateAndDispatch = useCoreReducer()
  return <CoreContext.Provider value={stateAndDispatch}>{children}</CoreContext.Provider>
}
