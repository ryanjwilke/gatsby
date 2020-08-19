import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import './layout.sass'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Helmet title="Design System">
        <html lang="en" />
      </Helmet>
      <nav>
        <h6>Design System</h6>
        <menu>
          <ul>
            <li><Link to="/">Overview</Link></li>
            <li><Link to="/components/">Components</Link></li>
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
