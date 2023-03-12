import React, {useState } from 'react'
import Dropdown from '../../../components/dropdown/dropdown'
import AdminDashboard from './dashboard'
import OrgImage from './../../../images/org-logo-sample.jpg'
import MagkahiosaLogo from './../../../images/MagkahiOSA-logo.jpg'
import Sark from './sarf'
const Admin = () => {


  const [screen,setscreen] = useState(AdminDashboard)


  


  return (
    <div className="flex w-screen h-screen overflow-hidden">


      {/* Nav bar */}
      <div className=" 
              
                flex flex-col items-center justify-start 
                h-[100%] max-w-[400px] min-w-[350px]  
              
                bg-[#1A1851] border-yellow-600 
                border-r-[2px]  ">

        <div className='w-[80%] mt-10 flex flex-col items-start gap-10 '>
              <div className="flex items-center gap-3 gap">
                <img className=" 
                          h-[50px] w-[50px]  
                          object-contain rounded-full "
                  src={OrgImage}
                  alt="Org Image"/>
                <div className="flex flex-col items-start justify-start text-white ">
                  <h2 className="font-semibold text-md">
                              Floreto M. Quinito Jr.</h2>

                  <p className="
                          text-xs text-[#FCB316]">
                    USTP Office of Student Affairs.</p>
                </div>
              </div>

          <ul className=' flex flex-col gap-1 text-white text-md font-[200] text-center w-[90%] self-center' >


            <li className=' bg-[#FCB316] font-normal  cursor-pointer w-full   flex px-5 py-2 rounded-sm'

              onClick={
                ()=>{
                  setscreen(AdminDashboard)
                }
              }
            >Dashboard</li>


            <li>
              <div className='hover:bg-[#FCB316] w-full flex cursor-pointer pl-5 pr-2 py-2 rounded-sm justify-between '>
                    
                    <span className=''>SARF Tracking</span>
                    <span className="material-symbols-outlined">
                    chevron_left
                    </span>
              </div>
              <ul  className="py-2 pl-6 space-y-2 ">
                      <li className='flex w-full px-5 py-2 rounded-sm cursor-pointer hover:bg-slate-600'
                      onClick={
                        ()=>{
                          setscreen(Sark)
                        }
                      }
                      >Requests</li>
                      <li className='flex w-full px-5 py-2 rounded-sm cursor-pointer hover:bg-slate-600'>Evaluation Reports</li>
                    
                    
              </ul>
            </li>


            {/* <li>
              <div className='hover:bg-[#FCB316] w-full flex cursor-pointer pl-5 pr-2 py-2 rounded-sm justify-between'>
                    
                    <span >User Management</span>
                    <span className="material-symbols-outlined">
                    expand_more
                    </span>
              </div>
              <ul  className="py-2 pl-6 space-y-2 ">
                      <li className='flex w-full px-5 py-2 rounded-sm cursor-pointer hover:bg-slate-600'>Users</li>
                      <li className='flex w-full px-5 py-2 rounded-sm cursor-pointer hover:bg-slate-600'>Roles</li>
                      <li className='flex w-full px-5 py-2 rounded-sm cursor-pointer hover:bg-slate-600'>Permission</li>
                    
                    
              </ul>
            </li> */}

            <li>
              <div className='hover:bg-[#FCB316] w-full flex cursor-pointer pl-5 pr-2 py-2 rounded-sm justify-between'>
                    
                    <span >Calendar Management</span>
                    <span className="material-symbols-outlined">
                    expand_more
                    </span>
              </div>
              <ul  className="py-2 pl-6 space-y-2 ">
                      <li className='flex w-full px-5 py-2 rounded-sm cursor-pointer hover:bg-slate-600'>Calendar Schedule</li>
                      
                    
                    
              </ul>
            </li>

            <li>
              <div className='hover:bg-[#FCB316] w-full flex cursor-pointer pl-5 pr-2 py-2 rounded-sm justify-between'>
                    
                    <span >Others</span>
                    <span className="material-symbols-outlined">
                    expand_more
                    </span>
              </div>
              <ul  className="py-2 pl-6 space-y-2 ">
                      <li className='flex w-full px-5 py-2 rounded-sm cursor-pointer hover:bg-slate-600'>Policy Memos</li>
                      
                    
                    
              </ul>
            </li>


            <li>
            <div className='mt-10 hover:bg-[#434343] w-full flex cursor-pointer pl-5 pr-2 py-2 rounded-sm justify-between'>
                    
                    <span className='flex gap-2' >Log Out 
                    <span className="material-symbols-outlined">
                      arrow_right_alt
                    </span>
                    </span>
                    
              </div>
            </li>
            
          </ul>
        </div>
      </div>

      {/* Nav bar */}

      <div className=' h-[100%] w-full'>
        <div className=" flex items-center justify-center h-[100px] w-full bg-white">
            
            <img className='h-12' src={MagkahiosaLogo} alt="" />
             
           
            
        </div>
        <div className=" h-[100%] w-full bg-slate-200">{screen}</div>
      </div>
      


      <div className=" flex justify-between items-center fixed bottom-0 h-[60px] w-full bg-[#FCB316] text-sm">
        <p className='ml-20'>2022 © USTP Office of Student Affairs v1.0.0</p>
        <p className='mr-10'>November 11, 2022 10:13 AM</p>
      </div>
    </div>
  );
}

export default Admin