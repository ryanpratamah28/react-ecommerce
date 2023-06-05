import React from 'react'
import { useRouteError } from 'react-router-dom'

function ErrorPage() {
  const error = useRouteError()
  console.error(error)

  return (
    <div id='error-page'>
      <div className='min-vh-100 d-flex justify-content-center align-items-center'>
        <div className='d-flex justify-content-center align-items-center flex-column'>
          <h1 className='mb-4 fw-bolder'>Oops!</h1>
          <p className='mb-2 fw-normal'>
            Sorry, an unexpected error has occurred.
          </p>
          <p className='mb-2 text-muted'>
            <i>{error.statusText || error.message}</i>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage
