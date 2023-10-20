"use client"
import { useGetUsersQuery } from '@/redux/feature/api';

const DataList = () => {
  const { data: dataAll, isFetching, isLoading } = useGetUsersQuery();
  console.log(dataAll)

  return (
    <div >

      {isLoading ? <div>Loading...</div> : dataAll?.map((data) => (
        <div key={data.id} className="">
          <div className=" flex flex-col justify-center items-center m-2 p-2 bg-slate-300 shadow-md rounded-md">
            <span>{data?.title}</span>
            <span>{data?.description}</span>
          </div>
        </div>
      ))}




    </div>
  )
}

export default DataList