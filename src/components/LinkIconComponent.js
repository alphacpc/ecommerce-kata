import React from 'react'
import { Link } from 'react-router-dom'

const LinkIconComponent = ({to, icon: IconComponent, text }) => {
  return (
    <Link to={to} className="divLinkAuth">
      {IconComponent && <IconComponent />} {text}
    </Link>
  )
}

export default LinkIconComponent