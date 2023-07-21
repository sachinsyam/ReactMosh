import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Counter from './components/Counter';


import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <Counter/>
  </React.StrictMode>,
)
