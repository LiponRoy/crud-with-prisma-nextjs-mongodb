import React from 'react'

interface InputProps{
    placeholder: string
}

const Input = ({placeholder}:InputProps) => {
  return (
    <>
      <input className=' w-72 h-10 rounded-md border-1 shadow-md p-2 my-1' placeholder={placeholder} type="text" id="fname" name="fname"/>
    </>
  )
}

export default Input
