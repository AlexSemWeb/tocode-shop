import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

// store:
import Store from './Store'

// libs:
import 'uimini'

// app:
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Store>
        <App />
      </Store>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
