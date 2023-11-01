import React from 'react'
import Menu from '../../components/Menu'
import LoginForm from './LoginForm'

const Login = () => {
  return (
    <div className='signup-container'>
      <div className='sigup-header'>
        <div></div>
      </div>
      <h3>Najavi se</h3>
      <LoginForm />
      <Menu />
    </div>
  )
}

export default Login
