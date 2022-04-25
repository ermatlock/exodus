import React from 'react'
import "./ErrorPage.css"

const ErrorPage = ({error}) => {
  return (
    <div className="error-container">
      <h1>Sorry, We're having trouble getting that. Please try again!</h1>
    </div>
  )
}

export default ErrorPage