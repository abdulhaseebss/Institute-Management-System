import React from 'react'
import PersistentDrawerLeft from '../../componenets/Drawer'
import { Route, Routes } from 'react-router-dom'
import AllCourse from './allcourse/AllCourse'
import AllStudent from './allstudent/AllStudent'
import Addcourse from './addcourse/AddCourse'
import { Box } from '@mui/material'

const AdminDashboard = () => {
  return (
    <>
    <PersistentDrawerLeft screen={
      <Box>

      <Routes>
      <Route path='/addcourse' element={<Addcourse />} />
      <Route path='/' element={<AllCourse/>} />
      <Route path='/allstudents' element={<AllStudent />} />
    </Routes>
      </Box>
    }/>
    </>
  )
}

export default AdminDashboard