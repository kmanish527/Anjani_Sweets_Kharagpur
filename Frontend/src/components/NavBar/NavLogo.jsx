import React from 'react'
import { Link } from 'react-router-dom'

export default function NavLogo() {
  return (
    <div className="flex-shrink-0" >
        <Link to="/">
      <img src="/Anjani-nav-fot-logo.png" alt="Logo" className="h-14 w-auto" />
        </Link>
    </div>
  )
}
