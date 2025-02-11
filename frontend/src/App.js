import React, { useState } from 'react'
import './App.css'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import SignUp from './components/SignUp';
// import Login from './components/Login';
// import Dashboard from './components/Dashboard';

const App = () => {
  const[isLogin,setIsLogin]=useState(true);
  return (
  //   <Router>
  //   <Routes>
  //   <Route path="/signup" element={<SignUp />} />
  //   <Route path="/login" element={<Login />} />
  //   <Route path="/dashboard" element={<Dashboard />} />
  // </Routes>
  // </Router>
  <div>  
  <div className='Content'>
    <div className='Content-box'>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form>
        <input type='email' placeholder='Enter your email' />
        <input type='password' placeholder='Password' />
        <button>{isLogin ? "Login" : "Sign Up"}</button>
      </form>
      <button>Sign in with Github</button>
      <p>
        {isLogin? "Don't have an account?" : "Already have ab account?"}
        <span onClick={()=>setIsLogin(!isLogin)}> {isLogin ? "Login" : "Sign Up"}</span>
      </p>
    </div>
  </div>
</div>

  )
}

export default App
