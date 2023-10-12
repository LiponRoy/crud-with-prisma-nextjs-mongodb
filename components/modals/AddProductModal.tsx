"use client"
import React from 'react'
import Modal from './Modal';
import useAddModalStore from '@/hooks/useAddData';

const AddProductModal = () => {
    const addModal=useAddModalStore();
    
    const onClose = () => {
        addModal.onClose();
    }
    
  return (
    <Modal modalOpen={addModal.isOpen} onClose={onClose}/>
  )
}

export default AddProductModal
