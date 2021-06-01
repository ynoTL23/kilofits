import React from 'react'
import './button.scss'

const Button = ({ children, isGoogleSignIn, inverted, ...otherProps }) => {
  return (
    <button className={`btn ${inverted ? 'inverted' : ''}`} {...otherProps}>
      {children}
    </button>
  )
}

export default Button
