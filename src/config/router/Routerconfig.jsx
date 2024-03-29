import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../../screens/login/Login'
import SignupForm from '../../screens/signupform/SignupForm'
import Admission from '../../screens/admission/Admission'
import AdminDashboard from '../../screens/admin-dashboard/AdminDashboard'
import Student from '../../screens/student-dashboard/Student'

const Routerconfig = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='login' element={<Login/>}/>
            <Route path='*' element={<SignupForm/>}/>
            <Route path='admission' element={<Admission/>}/>
            <Route path='admin/*' element={<AdminDashboard/>}/>
            <Route path='student' element={<Student/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Routerconfig