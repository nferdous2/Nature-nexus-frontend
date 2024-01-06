import { Card } from '@mui/material';
import React, { useEffect, useState } from 'react';

const SoldList = () => {
  const [soldProducts, setSoldProducts] = useState([]);

  useEffect(() => {
    const fetchSoldProducts = async () => {
      try {
        const response = await fetch('http://localhost:8000/soldProduct');
        const data = await response.json();
        setSoldProducts(data);
      } catch (error) {
        console.error('Error fetching sold products:', error);
      }
    };

    fetchSoldProducts();
  }, []); 

  const paidProductsCount = soldProducts.filter(product => product.paidStatus).length;

  return (
    <Card variant="outlined" sx={{ maxWidth: 345 }}>
    
    <h2>Total Sold Products: {paidProductsCount}</h2>

    <ul>
        {soldProducts.map(product => (
          <li key={product._id}>
           <strong>Category:</strong> {product.product.category}
          </li>
        ))}
      </ul>
    </Card>
  
  );
};

export default SoldList;
