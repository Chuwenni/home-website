import React from 'react'

const Login = () => {
  return (
    <div className="Formcontainer">
        <form method="get">
            <input type="text" placeholder='Username or Email'/>
            <input type="password" placeholder='Password'/>
        </form>
    </div>
  )
}

export default Login