import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router';

import Loader from '../Loader/Loader';
import ProductList from '../ProductList/ProductList';
import { getProducts } from '../../gateway/client';

const CategoryWrapper = styled.div`
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  margin: 0 0 20px 0;

  @media (min-width: 1024px) {
    padding: 20px 50px 20px 50px;
  }
`;

const Category = () => {
  const { id } = useParams();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProducts(id)
      .then((p) => {
        const filtered = p.filter((prod) => prod.status !== 'OUT_OF_SEASON');
        setProducts(filtered);
        setLoading(false);
      })
      .catch((e) => {
        setError('Error fetching products');
        setLoading(false);
      });
  }, [id]);

  return (
    <CategoryWrapper>
      <Loader loading={loading}>
        {error ?? null}
        <ProductList products={products} />
      </Loader>
    </CategoryWrapper>
  );
};

export default Category;
