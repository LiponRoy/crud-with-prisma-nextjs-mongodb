import React from 'react'

interface MyDataProps {
    id: number | string;
    title: string;
    description: string;
}

const MyData = ({ id, title, description }: MyDataProps) => {

    return (
        <div key={id} className=' flex flex-col justify-center items-center p-2 m-2 bg-slate-100 '>
            <span>{title}</span>
            <span>{description}</span>

        </div>
    )
}

export default MyData