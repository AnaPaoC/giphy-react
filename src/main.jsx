import React from 'react'
import ReactDOM from 'react-dom/client'
import { GifExpertApp } from './GifExpertApp'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  //El StrictMode es para produccion, no se recomienda quitarlo
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>
)
