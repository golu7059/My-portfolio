import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ScrollRevealProvider from './utils/ScrollRevealProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ScrollRevealProvider>
      <App />
    </ScrollRevealProvider>
  </StrictMode>,
)
