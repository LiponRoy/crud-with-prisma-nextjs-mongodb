"use client"
import { useGetUsersQuery } from '@/redux/feature/api';
import React, { useEffect } from 'react';
import MyData from './MyData';



const AllData = () => {

    const { data: dataAll, isFetching, isLoading } = useGetUsersQuery();

    const all = () => {
        return isLoading ? <span className='text-green-900'>Loading...</span> : <div>
            {dataAll?.map((product) => (
                <MyData
                    key={product?.id}
                    id={product?.id}
                    title={product?.title}
                    description={product?.description}
                />
            ))}

        </div>
    }

    // useEffect(() => {
    //     all();

    // }, [])






    return (
        <>{all()}</>
    );
};

export default AllData;
