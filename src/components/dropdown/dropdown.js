import React, { useState } from 'react'

const Dropdown = (props) => {
    const [ishidden,setishidden] = useState(true)

    const [expand,setexpand] = useState({
        hide : "chevron_left",
        display: "hidden"
    })
    
  return (
    <li>
              <div onClick={()=>{
                if(ishidden){
                    setexpand({hide:"expand_more",display:""})
                    setishidden(false)
                }else{
                    setexpand({hide:"chevron_left",display:"hidden"})
                    setishidden(true)
                }
                
                
              }} className='hover:bg-[#FCB316] w-full flex cursor-pointer pl-5 pr-2 py-2 rounded-sm justify-between '>
                    
                    <span className=''>SARF Tracking</span>
                    <span className="material-symbols-outlined">
                    {expand.hide}
                    </span>
              </div>
              <ul  className={ expand.display + " py-2 pl-6 space-y-2"} >

                
                    
                  {props.lists}
                
                     
                    
              </ul>
            </li>
  )
}

export default Dropdown