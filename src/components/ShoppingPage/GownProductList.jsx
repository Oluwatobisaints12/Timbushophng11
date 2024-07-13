import React, { useEffect, useState } from 'react'
import { Card, Image, Text, Group, Loader, Container, Title, Badge, Button } from '@mantine/core';
import axios from 'axios';
// import data from '../../data/data.json'
import shoppingImage from '../../Images/Shopping Bag.svg';
import star from '../../Images/Star.svg';
import shoppingImagHover from '../../Images/shoppingImageHover.svg'
import splitUp from '../../Images/Down.svg'
import followformoreImg from '../../Images/Frame 54.svg'
import africaNativeImg from '../../Images/Frame 54 (1).svg'
import shortdressImg from '../../Images/Frame 54 (2).svg'
import ankarashortImg from '../../Images/Frame 54 (3).svg'
import titiafricaImg from '../../Images/Frame 54 (4).svg'
import africaAmericaImg from '../../Images/Frame 54 (5).svg'
import artistryImg from '../../Images/Frame 54 (6).svg'
import floraImg from '../../Images/Frame 54 (7).svg'
import removepreviewImg from '../../Images/Frame 54 (8).svg'
import Pagination from './Pagination';



// const gownsImages = {
//      "Frame 54.svg": followformoreImg,
//      "Frame 54 (1).svg": africaNativeImg,
//      "Frame 54 (2).svg": shortdressImg,
//      "Frame 54 (3).svg": ankarashortImg,
//      "Frame 54 (4).svg": titiafricaImg,
//      "Frame 54 (5).svg": africaAmericaImg,
//      "Frame 54 (6).svg": artistryImg,
//      "Frame 54 (7).svg": floraImg,
//      "Frame 54 (8).svg": removepreviewImg,
//      "Star.svg": star

// }

const GownProductList = ({currentPost}) => {
  const API_URL = 'https://timbu-get-all-products.reavdev.workers.dev/';
  const API_KEY = '0f84fd5ed41b4a1dbb3a22d6cee531ab20240712161729487017';
  const APP_ID = '94JLTEGLSGZCLG4';
  const ORGANIZATION_ID = 'd0e2b4cd873540e781cae4c4ef349630';

const fetchProducts = async (page = 1, size = 20, reverse_sort = false) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        organization_id: ORGANIZATION_ID,
        reverse_sort,
        page,
        size,
        Appid: APP_ID,
        Apikey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, setPostPerPage] = useState(10)
  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  const [isEmpty, setIsEmpty] = useState(false);
  const [page, setPage] = useState(1);


  const [error, setError] = useState(null); // State to manage any error

const [data, setData] = useState([])
  const [isHover, setIsHover] = useState(false)

  // const filteredGownProducts = data.filter(
  //   (product) => product.gownsImg && product.gowntitle && product.gowncost && product.gownrating && product.gownrating?.previwcount
  // );
  useEffect(() => {
    const getProducts = async () => {
        setLoading(true);
        setError(false);
        try {
            const data = await fetchProducts(page);
            setData(data.items);
        } catch (error) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    getProducts();
}, [page]);

   const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <Container>
        <Group>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {currentPosts.map((product, index) => (
          <div key={index} className="product-container">
            {/* Check if photos exist and have at least one element */}
            {product.photos && product.photos.length > 0 ? (
              <img
                src={`https://api.timbu.cloud/images/${product.photos[0].url}`}
                alt=''
              />
            ) : (
              <img src="defaultImageURL" alt="Default Image" />
            )}
            <div className='product-name-con'>
              <h2 className='product-name'>{product.name}</h2>
              <p className='product-cost'>{product.description}</p>
            </div>
          </div>
        ))}
        </Group>
    </Container>
);
}

export default GownProductList
