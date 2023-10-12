import React from 'react'

interface buttonProps{
    type: "button" | "submit" | "reset" | undefined,
    onClick: (event: React.MouseEvent<HTMLElement>)=>void,
    title: string
}

const Button = ({type,onClick,title}:buttonProps) => {
  return (
    <>
    <button className=' w-72 h-10 bg-slate-600 text-slate-200 my-2'  type={type} onClick={onClick}>{title}</button>
      
    </>
  )
}

export default Button
