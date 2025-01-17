'use client';

import { createContext, useState } from 'react';
import { useRouter } from 'next/navigation';

export const SiteContext = createContext();

export const SiteProvider = ({ children }) => {
  const [burgerMenu, setBurgermenu] = useState(false);
  const [filteredData, setFilteredData] = useState(null);

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
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};
