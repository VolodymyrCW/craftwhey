'use client';

import { GetDataWithPathname } from '@/fetch/clientFetch';
import { useEffect, useState } from 'react';
import ProductDetail from '@/components/ProductDetail/ProductDetail';
import ViewedProducts from '@/components/ViewedProducts/ViewedProducts';
// import styles from './ProductSlug.module.scss';

const ProductSlug = () => {
  const { data, isLoading } = GetDataWithPathname();

  const [viewedProducts, setViewedProducts] = useState([]);

  useEffect(() => {
    if (!data) return;

    let viewedProducts =
      JSON.parse(localStorage.getItem('viewedProducts')) || [];
    const isProductViewed = viewedProducts.find((p) => p?.slug === data?.slug);

    if (!isProductViewed) {
      viewedProducts = [data, ...viewedProducts].slice(0, 4);
      localStorage.setItem('viewedProducts', JSON.stringify(viewedProducts));
    }

    setViewedProducts(viewedProducts);
  }, [data]);

  return (
    <>
      <ProductDetail data={data} isLoading={isLoading} />
      <ViewedProducts viewedProducts={viewedProducts} />
    </>
  );
};
export default ProductSlug;
