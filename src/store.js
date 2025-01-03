import { create } from "zustand";
import { persist, devtools } from 'zustand/middleware'

export const useBasket = create(persist((set, get) => ({

    openBasket: false,

    setOpenBasket: () => set((state) => ({ openBasket: !state.openBasket })),

    basketGoods: [],

    addBasketItem: (id, name, image, price) => {
        set({ basketGoods: [...get().basketGoods, { id, name, image, price, quantity: 1 }] })
    },
    deleteBasketItem: (id) => set({
        basketGoods: [...get().basketGoods.filter((item) => item.id !== id)]
    }),
    incrementBasketItem: (itemId) => set({
        basketGoods: get().basketGoods.map(
            el => {
                if (itemId === el.id) {
                    return { ...el, quantity: el.quantity += 1 }
                } else { return el }

            })
    }),
    decrementBasketItem: (itemId) => set({
        basketGoods: get().basketGoods.map(
            el => {
                if (itemId === el.id) {
                    if (el.quantity <= 1) return el;
                    return { ...el, quantity: el.quantity -= 1 }
                } else { return el }

            })
    }),

})))
