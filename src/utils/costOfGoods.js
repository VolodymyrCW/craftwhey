import { useBasket } from "@/store";

export function getCostOfGoods() {
    const basketGoods = useBasket.getState().basketGoods;

    const totalSum = basketGoods?.reduce(
        (acc, el) => acc + el.quantity * Number(el.price),
        0
    );

    return totalSum
}