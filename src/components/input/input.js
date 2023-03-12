import React from 'react'

const Input = (props) => {
  return (
    <div className='flex flex-col gap-1 w-full'>
        <p className=' font-medium text-xs text-[#4B5563]'>{props.label}</p>
        <input className='w-full outline-none focus:border-[#1D4ED8] border-[1px] border-[#9ca3af97] text-xs px-4 py-[10px] rounded-[4px] font-[500] ' type={props.type} name="" onChange={props
        .onChange} placeholder={props.placeholder} id="" />
    </div>
  )
}

export default Input