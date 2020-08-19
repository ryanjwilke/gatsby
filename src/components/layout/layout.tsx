import React from 'react'
import { Link } from 'gatsby'
import './layout.sass'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <nav>
        <h6>Design System</h6>
        <menu>
          <ul>
            <li><Link to="/">Overview</Link></li>
            <li><Link to="/components/buttons">Components</Link></li>
            <li><Link to="#">Utilities</Link></li>
          </ul>
        </menu>
      </nav>
      <main>
        {children}
      </main>
    </div>
  )
}
