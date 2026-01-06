import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import App_Plus  from './App_plus.jsx'

createRoot(document.getElementById('test-root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


createRoot(document.getElementById('add-plus')).render(
  <StrictMode>
  <App_Plus />
  </StrictMode>
)

// The file App.jsx define as a React Component with name App
// This will render as div element in index.html and with id value 'root' (now i fix to test root to debug)
