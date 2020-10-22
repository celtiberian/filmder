import React from 'react'
import ReactDOM from 'react-dom'
import Search from './components/Search'
import { CoreContextProvider } from './contexts/index'

import './styles/Main.css'

ReactDOM.render(
  <div>
    <CoreContextProvider>
      <Search />
    </CoreContextProvider>
    <div id="filmder-icon"></div>
  </div>,
  document.getElementById('root')
)
