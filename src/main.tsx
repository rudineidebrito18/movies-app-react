import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/reset.css'
import './assets/styles/global.css'
import Routes from './routes'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Routes/>
  </React.StrictMode>,
)
