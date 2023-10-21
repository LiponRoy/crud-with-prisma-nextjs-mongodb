"use client"
import { useDeleteDataMutation, useGetUsersQuery } from '@/redux/feature/api';
import Notiflix from 'notiflix';
import { MdDeleteOutline } from 'react-icons/md';

const DataList = () => {
  const { data: dataAll, isFetching, isLoading } = useGetUsersQuery();
  const [deleteData, { isLoading: deleteLoading, isSuccess }] = useDeleteDataMutation();

  const handleDelete = async (myId: any) => {
    await deleteData(myId);
  };

  // for confirm dialogue
  const confirmDelete = (id: any) => {
    Notiflix.Confirm.show(
      'Delete this item',
      'Do you delete it ?',
      'Delete',
      'NO',
      function okCb() {
        handleDelete(id);
        // setTimeout(() => {
        // 	window.location.reload();
        // }, 3000);
      },
      function cancelCb() { },
      {
        width: '320px',
        borderRadius: '8px',
        // etc...
      },
    );
  };

  return (
    <div >

      {isLoading ? <div>Loading...</div> : dataAll?.map((data) => (
        <div key={data.id} className="">
          <div className=" flex flex-col justify-center items-center m-2 p-2 bg-slate-300 shadow-md rounded-md">
            <span>{data?.title}</span>
            <span>{data?.description}</span>
            <button onClick={() => confirmDelete(data?.id)} className=' font-bold' >

              <MdDeleteOutline size={24} />
            </button>
          </div>
        </div>
      ))}




    </div>
  )
}

export default DataList