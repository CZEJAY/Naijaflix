import { create } from "zustand"

export const useSideBarToggle = create((set) => ({
    isOpen: false,
    toggle: () => set((state: any) => ({ isOpen: !state.isOpen}))
}))

