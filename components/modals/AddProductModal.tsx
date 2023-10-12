'use client';
import { useCallback, useState } from 'react';
import React from 'react';
import Modal from './Modal';
import useAddModalStore from '@/hooks/useAddData';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';
import Input from '../Input';

const AddProductModal = () => {
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

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		setIsLoading(true);

		axios
			.post('/api/post', data)
			.then(() => {
				addModal.onClose();
				console.log('Data posted');
			})
			.catch((error) => {
				console.log('Error', error);
			})
			.finally(() => {
				setIsLoading(false);
			});
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
