"use client"
import { useGetUsersQuery } from '@/redux/feature/api';
import { useDispatch, useSelector } from 'react-redux';

const DataList = () => {
  // const dispatch = useDispatch();
  const { data: dataAll, isFetching } = useGetUsersQuery();
  console.log(dataAll)

  return (
    <div >

      {dataAll?.map((data) => (
        <div key={data.id} className="">
          <span>{data.title}</span>
        </div>
      ))}


    </div>
  )
}

export default DataList