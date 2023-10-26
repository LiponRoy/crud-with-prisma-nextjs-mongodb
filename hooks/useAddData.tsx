import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
interface AddModalStore {
	isOpen: boolean;
	updateId: string;
	onOpen: () => void;
	onClose: () => void;
	setUdateId: (id: string) => void;

}

const useAddModalStore = create<AddModalStore>()(devtools((set) => ({
	isOpen: false,
	updateId: '',
	setUdateId: (id: string) => set({ updateId: id }),
	onOpen: () => set({ isOpen: true }),
	onClose: () => set({ isOpen: false }),

}), { name: "dev1" }));



export default useAddModalStore;