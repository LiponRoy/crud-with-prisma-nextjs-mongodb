'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { RxCross2 } from 'react-icons/rx';
import Button from '../Button';

interface modalProps {
	modalOpen: boolean;
	body?: React.ReactElement;
	onClose: () => void;
	onSubmit: () => void;
}

const Modal = ({ modalOpen, body, onClose, onSubmit }: modalProps) => {
	const [showModal, setShowModal] = useState(modalOpen);

	useEffect(() => {
		setShowModal(modalOpen);
	}, [modalOpen]);

	const handleSubmit = useCallback(() => {
		// if (disabled) {
		// 	return;
		// }

		onSubmit();
	}, [onSubmit]);

	if (!modalOpen) {
		return null;
	}
	return (
		<div
			className={` h-screen w-full flex justify-center items-center  h-full w-full ${
				showModal ? 'bg-black/40' : ''
			}`}
		>
			<div
				className={`relative w-[400px] md:w-[600px] h-[300px] md:h-[500px] overflow-y-auto bg-slate-300 text-lg rounded-md order-1 shadow-md flex flex-col justify-center items-center translate duration-300 ${
					showModal
						? ' translate-y-0 opacity-100'
						: 'translate-y-full opacity-0'
				}`}
			>
				{body}
				<Button
					myClassName=" w-72 h-10 bg-slate-600 text-slate-200 my-2"
					type="submit"
					title="SUBMIT"
					onClick={handleSubmit}
				/>

				<div
					onClick={onClose}
					className=" absolute top-4 right-4 cursor-pointer hover:border hover:bg-slate-700 hover:text-slate-200 hover:rounded-md "
				>
					<RxCross2 size="24" />
				</div>
			</div>
		</div>
	);
};

export default Modal;
