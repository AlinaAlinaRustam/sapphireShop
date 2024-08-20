import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App'

import './index.css'
import './components/styles/Navbar.css'
import './components/styles/Category.css'
import './components/styles/Footer.css'
import './components/styles/KidsSec.css'
import './components/styles/MenCat.css'
import './components/styles/BeautySec.css'
import './components/styles/HomeSec.css'
import './components/styles/ProductPage.css'
import './components/styles/SinglePage.css'
import './components/styles/Cart.css'
import './components/styles/NavDropdown.css'

const root = ReactDom.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
   
        <App />
      
  </React.StrictMode>
)
