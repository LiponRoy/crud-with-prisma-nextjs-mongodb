import useAddModalStore from '@/hooks/useAddData';
import { useDeleteDataMutation } from '@/redux/feature/api';
import React, { useCallback } from 'react'
import { FaBeer } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';

interface MyDataProps {
    id: string;
    title: string;
    description: string;
}


const MyData = ({ id, title, description }: MyDataProps) => {
    const { setUdateId, onOpen, onClose, updateId } = useAddModalStore()
    // RTK
    const [DeleteData, { isLoading, isSuccess }] = useDeleteDataMutation();

    const setUpdateIdAndOpenModal = (id: string) => {

        setUdateId(id)
        onOpen();

    }

    const deleteHandle = async (id: string) => {
        await DeleteData(id);
    }

    return (
        <div key={id} className=' flex flex-col justify-center items-center p-2 m-2 bg-slate-100 '>
            <span>{title}</span>
            <span>{description}</span>
            <div className="flex justify-center gap-x-4">
                <button onClick={() => setUpdateIdAndOpenModal(id)} className='text-green-900'><FiEdit size={24} /></button>
                <button onClick={() => deleteHandle(id)} className={`${isLoading ? 'text-red-600' : 'text-green-900'}`}>
                    <FaBeer size={24} />
                </button>

            </div>
        </div>
    )
}

export default MyData