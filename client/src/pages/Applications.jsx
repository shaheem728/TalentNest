import React from 'react'
import Navbar from '../components/Navbar'

const Applications = () => {
  return (
    <>
      <Navbar/>
      <div>
        <h2>Your Resume</h2>
        <div>
          {
            isEdit ? <> </> : <div> </div>
          }
        </div>
      </div>
    </>
  )
}

export default Applications
