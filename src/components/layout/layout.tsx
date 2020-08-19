import React from 'react'
import './layout.sass'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <nav>
        <h6>Design System</h6>
        <menu>
          <ul>
            <li><a href="#">Overview</a></li>
            <li><a href="#">Components</a></li>
            <li><a href="#">Utilities</a></li>
          </ul>
        </menu>
      </nav>
      <main>
        {children}
      </main>
    </div>
  )
}
