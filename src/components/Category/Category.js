import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router';
import { getProducts } from '../../gateway/client';

import Loader from '../Loader/Loader';
import ProductList from '../ProductList/ProductList';

const CategoryWrapper = styled.div`
  display: flex;
  padding: 20px;
`;

const Category = () => {
  const { id } = useParams();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProducts(id)
      .then((p) => {
        setProducts(p);
        setLoading(false);
      })
      .catch((e) => {
        setError('Error fetching products');
        setLoading(false);
      });
  }, [id]);

  console.log(products);

  return (
    <CategoryWrapper>
      <Loader loading={loading}>
        <ProductList products={products} />
      </Loader>
    </CategoryWrapper>
  );
};

export default Category;
