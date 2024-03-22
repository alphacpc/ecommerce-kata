import React from 'react'
import { Link } from 'react-router-dom'

const LinkIconComponent = ({to, icon: IconComponent, text, design, target }) => {
  return (
    <Link to={to} target={target ? "_blank" : "_self"} className={`${design}`}>
      {IconComponent && <IconComponent />} {text}
    </Link>
  )
}

export default LinkIconComponent