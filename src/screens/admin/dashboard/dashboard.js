import React from 'react'

const AdminDashboard = () => {
  const users = {
      name: "Floreto M. Quinito Jr.",
      position: "PE",
    }
  
  

  return (
    <div className='w-full h-full bg-red-500'>
      
     
          <div className='flex w-10 min-w-[100px] bg-red-400 gap-10 ' >
            <div>{users.name}</div>
            <p>{users.position}</p>
          </div>
        
      
      
    </div>
  )
}

export default AdminDashboard