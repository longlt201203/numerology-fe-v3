import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const Root = () => {
  return import.meta.env.VITE_ENV == "development" ? (
    <App/>
  ) : (
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(<Root/>)
