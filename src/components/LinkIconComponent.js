import React from 'react'
import { Link } from 'react-router-dom'

const LinkIconComponent = ({to, icon: IconComponent, text, style }) => {
  return (
    <Link to={to} className={`${style}`}>
      {IconComponent && <IconComponent />} {text}
    </Link>
  )
}

export default LinkIconComponent