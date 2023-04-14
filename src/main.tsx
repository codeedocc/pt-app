import { Provider } from 'react-redux'
import { store } from './store/store'
import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
