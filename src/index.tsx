import React from 'react'
import ReactDOM from 'react-dom'
import CssBaseline from '@mui/material/CssBaseline'
import { Provider } from 'react-redux'
import store from './Redux/store'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import ScrollToTop from './components/ScrollToTop'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ScrollToTop />
        <CssBaseline />
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
