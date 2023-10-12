"use client";
import React, { useState, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import Input from "../Input";
import Button from "../Button";

interface modalProps {
  modalOpen: boolean;
  onClose: () => void;
}

const Modal = ({ modalOpen, onClose }: modalProps) => {
  const [showModal, setShowModal] = useState(modalOpen);

  useEffect(() => {
    setShowModal(modalOpen);
  }, [modalOpen]);

  const handleClick = () => {};
  return (
    <div className=" h-screen w-full flex justify-center items-center  h-full w-full bg-black/40 ">
      <div className={`relative w-[400px] md:w-[600px] h-[300px] md:h-[500px] overflow-y-auto bg-slate-300 text-lg rounded-md order-1 shadow-md flex flex-col justify-center items-center translate duration-300 ${showModal ?" translate-y-0 opacity-100":"translate-y-full opacity-0"}`}>
        <Input placeholder="Name" />
        <Input placeholder="Email" />
        <Input placeholder="Password" />
        <Button type="submit" title="SUBMIT" onClick={handleClick} />

        <div
          onClick={onClose}
          className=" absolute top-4 right-4 cursor-pointer"
        >
          <RxCross2 size="24" />
        </div>
      </div>
    </div>
  );
};

export default Modal;
