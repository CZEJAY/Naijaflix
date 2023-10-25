import { create } from "zustand"

export const useSideBarStore = create((set) => ({
    isOpen: false,
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false }),
    toggle: () => set((state: any) => ({ isOpen: !state.isOpen })),
}))