import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Login from '../Login'
import Register from '../Register'
import Head from '../DashBoard/Head'
function Layout() {
  return (
    <div>
              <Routes>
                <Route path='/' element={<Login />} ></Route>
                <Route path='/register' element={<Register />}></Route>
                <Route path='/dashboard' element={<Head />}></Route>
            </Routes>
        </div>
  )
}

export default Layout
