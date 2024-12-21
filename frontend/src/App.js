import React from 'react'
import './App.css'

const App = () => {
  return (
    <div>  
        <div className='Content'>
        <h1>Login</h1>
          <div className='Content-box'>
              <input type='email' placeholder='Enter your email' />
              <input type='github' placeholder='Enter your github username' />
          </div>
        </div>
     </div>
  )
}

export default App
