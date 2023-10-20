'use client';
import { useCallback, useState } from 'react';
import React from 'react';
import Modal from './Modal';
import useAddModalStore from '@/hooks/useAddData';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Input from '../Input';
import { useAddDataMutation } from '@/redux/feature/api';

const AddProductModal = () => {
	const [addData, { isLoading: addLoading, isSuccess }] = useAddDataMutation();
	const addModal = useAddModalStore();
	const [isLoading, setIsLoading] = useState(false);
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

	const onClose = () => {
		addModal.onClose();
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
		</div>
	);

	const onSubmit: SubmitHandler<FieldValues> = async (data) => {

		await addData(data)
		addModal.onClose();
	};

	return (
		<Modal
			body={bodyContent}
			onSubmit={handleSubmit(onSubmit)}
			modalOpen={addModal.isOpen}
			onClose={onClose}
		/>
	);
};

export default AddProductModal;
