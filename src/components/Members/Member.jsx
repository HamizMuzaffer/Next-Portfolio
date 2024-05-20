import React from 'react'

function Member() {
  return (
    <>
<div>
    <h1 className='text-center text-white bg-gray-800 text-3xl' id='about'>Meet Our Team</h1>
    <div className='w-full object-contain  sm:h-64 pt-14 flex flex-col justify-around sm:flex-row bg-gray-800'>
         
        
        <img src="https://easy-feedback.de/wp-content/uploads/2022/10/Employee-Journey-What-it-is-and-how-to-improve-it.jpg" alt="" className=' object-contain'  />
        <img src="https://blog.hubspot.com/hs-fs/hubfs/employee-retention-rate.jpg?width=595&height=400&name=employee-retention-rate.jpg" alt="" className=' object-contain' />
        <img src="https://assets-global.website-files.com/611648b6262a801811180f6c/622a840a298a8bda4133dba2_Untitled%20design%20(7)%20(2).png" alt="" className=' object-contain' />
    </div>
    </div>
    </>
  )
}

export default Member