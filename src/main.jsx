import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import SailboatPage from './SailboatPage'
import 'lenis/dist/lenis.css'
import './styles.css'

const isSailboatPage = window.location.pathname.replace(/\/$/, '') === '/passeio-de-veleiro'

ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode>{isSailboatPage ? <SailboatPage /> : <App />}</React.StrictMode>)
