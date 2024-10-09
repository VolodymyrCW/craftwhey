'use client';

import ProductList from '@/components/ProductList/ProductList';
import ViewedProducts from '@/components/ViewedProducts/ViewedProducts';
import { SiteContext } from '@/context/siteContext';
import { GetDataForHomeByCollection } from '@/fetch/clientFetch';
import { useSearchParams } from 'next/navigation';
import { Suspense, useContext, useEffect, useState } from 'react';
// import styles from './Products.module.scss';

const Products = () => {
  const { data, isLoading } = GetDataForHomeByCollection('products');
  const { filteredData, setFilteredData, handleReset } =
    useContext(SiteContext);
  console.log(filteredData);
  const [viewedProducts, setViewedProducts] = useState([]);

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem('viewedProducts')) || [];
    setViewedProducts(products);
  }, [filteredData]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchParamsHandler data={data} setFilteredData={setFilteredData} />
      <ProductList
        data={data}
        filteredData={filteredData}
        handleReset={handleReset}
        setFilteredData={setFilteredData}
      />
      {!filteredData && <ViewedProducts viewedProducts={viewedProducts} />}
    </Suspense>
  );
};

const SearchParamsHandler = ({ data, setFilteredData }) => {
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!data) return;

    const categoryFromURL = searchParams.get('category');

    if (categoryFromURL) {
      const filtered = data.filter(
        (item) => item.categoryRus === categoryFromURL
      );
      setFilteredData(filtered);
    }
  }, [data, searchParams, setFilteredData]);

  return null;
};

export default Products;
