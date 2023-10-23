import React from 'react'
import { RxCross2 } from 'react-icons/rx';

interface modalProps {
    isModalopen: boolean,
    modalClose: () => void,
    children: React.ReactNode
}

const Modal = ({ isModalopen, modalClose, children }: modalProps) => {
    return (
        isModalopen && <div className=' bg-black/50 fixed inset-0'>
            <div className=" flex justify-center items-center h-full">
                <div className=" relative bg-slate-300 w-2/3 h-2/3 flex flex-col justify-center items-center">
                    <button onClick={modalClose} className=' absolute top-2 right-2 text-black' >
                        <RxCross2 size={24} />
                    </button>
                    {children}
                </div>
            </div>


        </div>
    )
}

export default Modal