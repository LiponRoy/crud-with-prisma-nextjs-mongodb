"use client"
import React, { useState } from 'react'
import Modal from './modals/Modal'
import useAddModalStore from '@/hooks/useAddData'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useAddDataMutation } from '@/redux/feature/api';
import Input from './Input';



const AddData = () => {

    const dataAdd = useAddModalStore()
    const [addData, { isLoading, isSuccess, isError }] = useAddDataMutation();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            title: '',
            description: '',
        },
    });



    const onSubmit: SubmitHandler<FieldValues> = async (data) => {

        await addData(data)
        setTimeout(() => {
            dataAdd.onClose();
        }, 2000);


    };


    const bodyContent = (
        <div className="flex flex-col gap-4">
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
            <button onClick={handleSubmit(onSubmit)}>
                {isLoading ? "Loading.." : "Submit"}
            </button>
        </div>
    );


    return (
        <Modal isModalopen={dataAdd.isOpen} modalClose={dataAdd.onClose} children={bodyContent} />
    )
}

export default AddData