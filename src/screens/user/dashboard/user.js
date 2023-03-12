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
        </div>
        <div className=" h-[100%] w-[100%] bg-slate-200">{/* {screen} */}</div>
      </div>

      <div className=" flex justify-between items-center fixed bottom-0 h-[60px] w-[100%] bg-[#FCB316] text-sm">
        <p className="ml-20">2022 © USTP Office of Student Affairs v1.0.0</p>
        <p className="mr-10">November 11, 2022 10:13 AM</p>
      </div>
    </div>
  );
}

export default User