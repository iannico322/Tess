import React, {useState } from 'react'
import Test1 from './test'
import Test2 from './test2'
import OrgImage from './../../../images/org-logo-sample.jpg'
import MagkahiosaLogo from './../../../images/MagkahiOSA-logo.jpg'
import Dropdown from '../../../components/dropdown/dropdown'
const User = () => {


  const [screen,setscreen] = useState(Test1)


  
  return (
    <div className="flex w-screen h-screen  overflow-hidden">
      {/* Nav bar */}
      <div
        className=" 
              
                flex flex-col items-center justify-start 
                h-[100%] max-w-[400px] min-w-[350px]  
              
                bg-[#1A1851] border-yellow-600 
                border-r-[2px] "
      >
        <div className="w-[80%] mt-10 flex flex-col items-start gap-10">
          <div className=" flex gap items-center gap-3 ">
            <img
              className=" 
                          h-[50px] w-[50px]  
                          object-contain rounded-full "
              src={OrgImage}
              alt="Org Image"
            />
            <div
              className=" 
                          flex flex-col 
                          text-white 
                          items-start justify-start "
            >
              <h2
                className="
                            text-md font-semibold"
              >
                LadyMaxine Sarsalejo
              </h2>

              <p
                className="
                          text-xs text-[#FCB316]"
              >
                Academic Unit Organization Officer
              </p>
            </div>
          </div>

          <ul className=" flex flex-col gap-1 text-white text-md font-[200] text-center w-[90%] self-center">
            <li
              className=" bg-[#FCB316] font-normal  cursor-pointer w-full   flex px-5 py-2 rounded-sm"
              onClick={() => {}}
            >
              Dashboard
            </li>

            <li>
              <div className="hover:bg-[#FCB316] w-full flex cursor-pointer pl-5 pr-2 py-2 rounded-sm justify-between">
                <span>SARF Management</span>
                <span className="material-symbols-outlined">expand_more</span>
              </div>
              <ul className="py-2 pl-6 space-y-2 ">
                <li className="flex w-full px-5 py-2 rounded-sm cursor-pointer hover:bg-slate-600">
                  Create New
                </li>
                <li className="flex w-full px-5 py-2 rounded-sm cursor-pointer hover:bg-slate-600">
                  Evaluate Reports
                </li>
              </ul>
            </li>

            <li>
              <div className="hover:bg-[#FCB316] w-full flex cursor-pointer pl-5 pr-2 py-2 rounded-sm justify-between">
                <span>Calendar</span>
                <span className="material-symbols-outlined">expand_more</span>
              </div>
              <ul className="py-2 pl-6 space-y-2 ">
                <li className="flex w-full px-5 py-2 rounded-sm cursor-pointer hover:bg-slate-600">
                  Schedule
                </li>
              </ul>
            </li>

            <li>
              <div className="mt-10 hover:bg-[#434343] w-full flex cursor-pointer pl-5 pr-2 py-2 rounded-sm justify-between">
                <span className="flex gap-2">
                  Log Out
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

      <div className=" h-[100%] w-[100%]">
        <div className=" flex items-center justify-center h-[100px] w-[100%] bg-white">
          <img className="h-12" src={MagkahiosaLogo} alt="" />
          <div className='flex'>
            <span class="material-symbols-outlined">
              person
            </span>
            <hi class>Profile</hi>
          </div>
        </div>
        
          <div className=" h-[100%] w-[100%] bg-[#fafbfb]">{/* {screen} */}
            <div className='flex-wrap '> {/*first div*/}
              <div className="ml-10 mt-20 h-[100%] w-[100%] ">
              <button type="submit" className='px-10 py-3 hover:bg-slate-500 hover:text-white'>
                  <svg className="w-6 h-6 mr-2 inline-block" 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24"><path 
                  fill="currentColor" 
                  d="M10.41 7.41L9 6l-6 6 6 6 1.41-1.41L5.83 12H20V10H5.83l4.58-4.59z"/>
                  </svg>
                Back
              </button>
              </div>
            </div>
            <div className='flex '> {/*sec div*/}
              <div className="h-[100%] w-[50%] mt-20"> {/*sec div, first div*/}
                <div className='flex flex-col items-center mb-24'> {/*sec div, first div,first div*/}
                  <label className='text-[#2F80ED] text-xl font-normal mt-2 mb-7 -ml-10'>Personal Details</label>
                  <img src= {OrgImage} className='w-[35%] shadow-md boarder-solid border-2 border-[#7a7d84] border-opacity-40'></img>
                  <button 
                  type="submit" 
                  className='flex-shrink  -mt-3 rounded-full px-10 py-2
                   bg-[#fdfdf8] shadow-xl hover:bg-[#FCB316]
                    hover:text-white '>Upload New</button>
                </div>
                <div className='flex-col ml-40 m-10'> {/*sec div, first div,sec div*/}
                  <label className='text-[#2F80ED] text-xl font-normal'>Login Activity</label>
                  <p className='mt-4 font-light text-sm'>First acces to site</p>
                  <p className=''>Friday, December 25, 2023, 7:00PM</p>
                </div>
              </div>
              <div className='flex-wrap h-[100%] w-[100%]'> {/*sec div, sec div*/}
                <div className='flex'>  {/*sec div, sec div , first div*/}
                  
                    <div className="flex flex-col items-start h-[100%] w-[100%] mt-28">
                      <div className='m-2'>
                        <h1 className='font-light text-sm'>Name</h1>
                        <p className=''>LadyMaxine Y. Sarsalijo</p>
                      </div>
                      <div className='m-2'>
                        <h1 className='font-light text-sm'>Email</h1>
                        <p className=''>ladymaxine.sarsalijo@ustp.edu.ph</p>
                      </div>
                      <div className='m-2'>
                        <h1 className='font-light text-sm'>Organization</h1>
                        <p className=''>Society of Information Technology Enthusiasts</p>
                      </div>
                      <div className='m-2'>
                        <h1 className='font-light text-sm'>Role</h1>
                        <p className=''>Academic Unit Organization Officer</p>
                      </div>
                    </div>

                    <div className="items-start h-[100%] w-[100%] mt-28">
                        <div className='m-2'>
                          <h1 className='font-light text-sm'>Gender</h1>
                          <p className=''>Female</p>
                        </div>
                        <div className='m-2'>
                          <h1 className='font-light text-sm'>Birthdate</h1>
                          <p className=''>03/02/2023</p>
                        </div>
                        <div className='m-2'>
                          <h1 className='font-light text-sm'>Password</h1>
                          <p className=''>***********</p>
                        </div>  
                    </div>
                    
                    
                  
                </div>
                <div className='flex'>  {/*sec div, sec div , sec div*/}
                  <div className=" items-start h-[100%] w-[100%] mt-28">
                    <div className='ml-44'>
                      <h1 className='font-light text-sm'>Last access</h1>
                      <p className=''>Monday, December 4, 2022, 8:01 AM</p>
                    </div>
                    <div className='mt-24 ml-20'>
                      <button type="submit" className='px-10 py-2 rounded-xl bg-[#FCB316] hover:bg-[#dfc220] hover:text-white'>Edit Details</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>

      <div className=" flex justify-between items-center fixed bottom-0 h-[60px] w-[100%] bg-[#FCB316] text-sm">
        <p className="ml-20">2022 © USTP Office of Student Affairs v1.0.0</p>
        <p className="mr-10">November 11, 2022 10:13 AM</p>
      </div>
    </div>
  );
}

export default User