import React from 'react'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'
import Navbar from '../components/Navbar'

const ErrorPage = () => {
  const error=  useRouteError()
  return (
    <>
    <Navbar/>
    <h1>Oopss</h1>
    <p>{isRouteErrorResponse(error) ? 'this page is not found 404' :'this page is not found 404'}</p>
    </>
  )
}

export default ErrorPage