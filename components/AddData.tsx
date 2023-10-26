"use client"
import React, { useEffect, useState } from 'react'
import Modal from './modals/Modal'
import useAddModalStore from '@/hooks/useAddData'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useAddDataMutation, useGetUsersQuery, useUpdateDataMutation } from '@/redux/feature/api';
import Input from './Input';



const AddData = () => {

    const { isOpen, setUdateId, onClose, updateId } = useAddModalStore()
    const [addData, { isLoading, isSuccess, isError }] = useAddDataMutation();
    const [updateData, { isLoading: updateLoading, isSuccess: updateSuccess }] = useUpdateDataMutation();
    const { data: dataAll, isFetching } = useGetUsersQuery();


    const singleData = dataAll?.find((dataA) => dataA.id === updateId);
    console.log(singleData, "singleData")

    const ModalClose = () => {
        setUdateId("")
        onClose()
    }

    console.log("all data", dataAll)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FieldValues>({
        values: {
            title: singleData?.title,
            description: singleData?.description,
        },
    });

    console.log(singleData?.id, "Single Data")



    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        try {
            updateId && updateId !== "" ? await updateData(singleData) : await addData(data);

        } catch (error) {
            console.log(error)

        }
        reset();
        setTimeout(() => {
            onClose();
        }, 2000);
        setUdateId("");
    };


    const bodyContent = (
        <div className="flex flex-col gap-4">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input

                    id="title"
                    label="title"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                />
                <Input
                    id="description"
                    label="description"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                />
                <button type='submit' >
                    {isLoading ? "Loading.." : "Submit"}
                </button>
            </form>
        </div>
    );


    return (
        <Modal isModalopen={isOpen} modalClose={ModalClose} children={bodyContent} />
    )
}

export default AddData