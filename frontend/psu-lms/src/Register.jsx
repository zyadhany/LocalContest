import React from 'react'
import { useContext } from 'react'
import { AppContext } from './App'

import './Register.css'

const Register = () => {
  const { state, data } = useContext(AppContext);
  console.log(data);
  return (
    <>
      <section>
        <div className='register-form-parent'>
            <form>
                <div className='form-field'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" />
                </div>
                <div className='form-field'>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" />
                </div>
                <div className='form-field'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" />
                </div>
                {/* <hr/> */}
                <div className='submit-button'>Login</div>
            </form>
        </div>
      </section>
    </>
  )
}

export default Register
