
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ThemeProvider } from 'next-themes'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider 
      attribute="class" 
      defaultTheme="light"
      themes={['light', 'dark']}
      enableColorScheme
      disableTransitionOnChange
    >
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
