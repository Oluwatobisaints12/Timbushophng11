import React, { useEffect, useState } from 'react';
import { Card, Image, Text, Group, Loader, Container, Title, Badge, Button } from '@mantine/core';
import axios from 'axios';
import Pagination from './Pagination';
import shoppingImage from '../../Images/Shopping Bag.svg';
import star from '../../Images/Star.svg';
import shoppingImagHover from '../../Images/shoppingImageHover.svg';
import splitUp from '../../Images/Down.svg';
import followformoreImg from '../../Images/Frame 54.svg';
import africaNativeImg from '../../Images/Frame 54 (1).svg';
import shortdressImg from '../../Images/Frame 54 (2).svg';
import ankarashortImg from '../../Images/Frame 54 (3).svg';
import titiafricaImg from '../../Images/Frame 54 (4).svg';
import africaAmericaImg from '../../Images/Frame 54 (5).svg';
import artistryImg from '../../Images/Frame 54 (6).svg';
import floraImg from '../../Images/Frame 54 (7).svg';
import removepreviewImg from '../../Images/Frame 54 (8).svg';

const GownProductList = ({ currentPost }) => {
  const API_URL = 'https://timbu-get-all-products.reavdev.workers.dev/';
  const API_KEY = '0f84fd5ed41b4a1dbb3a22d6cee531ab20240712161729487017';
  const APP_ID = '94JLTEGLSGZCLG4';
  const ORGANIZATION_ID = 'd0e2b4cd873540e781cae4c4ef349630';

  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [isHover, setIsHover] = useState(false);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(API_URL, {
        params: {
          organization_id: ORGANIZATION_ID,
          Appid: APP_ID,
          Apikey: API_KEY,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response ? error.response.data : error.message);
    }
  };

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchProducts();
        setData(data.items);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, [currentPage]);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <Container className='product-list-con-col'>
      <Group className='gown-product-card-con'>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {currentPosts.map((product, index) => (
          <div key={index} className="product-container">
            <h2 className='product-name'>{product.name}</h2>
            {product.photos && product.photos.length > 0 ? (
              <img
                src={`https://api.timbu.cloud/images/${product.photos[0].url}`}
                alt={product.name || 'Product Image'}
                className='product-image'
              />
            ) : (
              <img src="defaultImageURL" alt="Default Image" />
            )}
            <div className='product-name-con'>
              <p className='product-cost'>{product.description}</p>
              <span className='product-cost'>{product.buying_price}</span>
            </div>
          </div>
        ))}
      </Group>
      <Pagination totalPost={data.length} paginate={paginate} postPerPage={postPerPage} />
    </Container>
  );
};

export default GownProductList;
