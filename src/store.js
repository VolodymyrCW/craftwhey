import { create } from "zustand";

export const useBasket = create((set, get) => ({
    basketGoods: [],
    openBasket: false,
    // setOpenBasket: () => {
    //     set({ openBasket: !get().openBasket })
    // }
    setOpenBasket: () => set((state) => ({ openBasket: !state.openBasket })),
}))