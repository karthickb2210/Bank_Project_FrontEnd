import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Login from '../Login'
import Main from '../Landingpage/MainPage'
import Head from '../DashBoard/Head'
import RegisterForm from '../NewaccountForm.jsx/RegisterForm'
function Layout() {
  return (
    <div>
              <Routes>
              <Route path='/' element={<Main />}></Route>
                <Route path='/login' element={<Login />} ></Route>
                <Route path='/register' element={<RegisterForm />}></Route>
                <Route path='/dashboard' element={<Head />}></Route>
                {/* <Route path='/createAccount' element={<RegisterForm />}></Route> */}
            </Routes>
        </div>
  )
}

export default Layout
