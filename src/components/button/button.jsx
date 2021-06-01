import React from 'react'
import './button.scss'

const Button = ({ children, isGoogleSignIn, ...otherProps }) => {
  return (
    <button className={`btn ${isGoogleSignIn ? 'google-sign-in' : ''}`} {...otherProps}>
      {children}
    </button>
  )
}

export default Button
