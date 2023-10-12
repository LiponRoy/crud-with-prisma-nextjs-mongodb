import { create } from 'zustand';

interface AddModalStore {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
	
}

const useAddModalStore = create<AddModalStore>((set) => ({
	isOpen: false,
	onOpen: () => set({ isOpen: true }),
	onClose: () => set({ isOpen: false }),
	
}));

export default useAddModalStore;