import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ProvaiderTash } from './store/UserProvaider.tsx'
import { Toaster } from 'sonner'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ProvaiderTash>
      <Toaster richColors/>
      <App />
    </ProvaiderTash>
  </React.StrictMode>,
)
