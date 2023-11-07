import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import { Box } from '@chakra-ui/react'


const Layout = () => {
  return (
    <>
            <Navbar/>
          <Box padding={2}><Outlet/></Box>
    </>
  )
}

export default Layout