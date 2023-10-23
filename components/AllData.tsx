"use client"
import { useGetUsersQuery } from '@/redux/feature/api';
import React from 'react';
import MyData from './MyData';

const AllData = () => {

    const { data: dataAll, isFetching, isLoading } = useGetUsersQuery();
    return (
        <div>
            {dataAll?.map((product) => (
                <MyData
                    id={product?.id}
                    title={product?.title}
                    description={product?.description}
                />
            ))}
        </div>
    );
};

export default AllData;
