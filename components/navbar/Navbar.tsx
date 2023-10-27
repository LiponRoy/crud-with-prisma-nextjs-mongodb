"use client"
import useAddModalStore from '@/hooks/useAddData';
import React from 'react'


const Navbar = () => {
  const addModal = useAddModalStore();

  // console.log("navIsopen : ", addModal.isOpen)

  return (
    <>
      <div className=" w-full h-16 bg-slate-400 cursor-pointer flex justify-end items-center pr-8">

        {/* <span onClick={addModal.onOpen}>Add Data</span> */}
        {/* <Button myClassName=' h-10 bg-slate-600 text-slate-200 my-2 px-2 rounded-md ' type='button' onClick={addModal.onOpen} title='Create Data' /> */}
        <button onClick={() => addModal.onOpen()}>Add Data</button>

      </div>
    </>
  )
}

export default Navbar
