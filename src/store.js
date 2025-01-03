import { create } from "zustand";
import { persist, devtools } from 'zustand/middleware'

export const useBasket = create(persist((set, get) => ({
    basketGoods: [],
    openBasket: false,
    // setOpenBasket: () => {
    //     set({ openBasket: !get().openBasket })
    // }
    setOpenBasket: () => set((state) => ({ openBasket: !state.openBasket })),
    // totalSumBasketGoods: get()?.basketGoods.reduce(
    //     (acc, el) => acc + el.quantity * Number(el.price),
    //     0
    // ),
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
