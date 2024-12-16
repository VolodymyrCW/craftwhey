'use client';

import { createContext, useState } from 'react';
import { useRouter } from 'next/navigation';

export const SiteContext = createContext();

export const SiteProvider = ({ children }) => {
  const [burgerMenu, setBurgermenu] = useState(false);
  const [filteredData, setFilteredData] = useState(null);
  const [openBasket, setOpenBasket] = useState(false);
  const [basketGoods, setBasketGoods] = useState([]);

  // console.log('basketGoodsContext:', basketGoods)

  const router = useRouter();

  const handleReset = () => {
    setFilteredData(null);
    router.replace('/products', undefined, { shallow: true });
  };

  return (
    <SiteContext.Provider
      value={{
        burgerMenu,
        setBurgermenu,
        filteredData,
        setFilteredData,
        handleReset,
        openBasket,
        setOpenBasket,
        basketGoods,
        setBasketGoods,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};
