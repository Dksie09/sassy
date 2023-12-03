import { create } from "zustand"
import { ServiceStore } from "@/types"

export const useServiceStore = create<ServiceStore>((set) => ({
    inViewService: null,
    setInViewService: (service: string | null) => set({ inViewService: service })
}))