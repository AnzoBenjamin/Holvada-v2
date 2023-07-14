import React from 'react'
import { Link } from 'react-router-dom'

export const Verification = () => {
  return (
    <div>Check your email for verification
        <Link to={"/login"}>Continue to signin</Link>
    </div>

  )
}
