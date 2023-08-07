import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Grid } from '@mui/material'
import './Products.css'
import Product from '../Product/Product'

// import { useQuery } from '@tanstack/react-query'

const Products = () => {
  const [products, setProducts] = useState([])

  // const {data:,isLoading} = useQuery({
  //   queryKey: ['bookDataCollection'],
  //   queryFn: () => fetch('http://localhost:5000/bookDataCollection')
  //   .then((res) => res.json()),

  // })
  // fetch data from server
  useEffect(() => {
    fetch('./freshfarmProductData.JSON')
      .then((res) => res.json())
      .then((data) => setProducts(data))
    //   .then((data) => console.log(data))
  }, [])
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Typography  variant="h3"
          sx={{ marginBottom: 3, color: '#444', fontWeight: 'bold' }}>
          Vagetables are Available
        </Typography>
        <Grid container>
          {products.map((product) => (
            <Product key={product.id} product={product}></Product>
          ))}
        </Grid>
        {/* <Button className="bottomButton">Read More</Button> */}
      </Box>
    </>
  )
}

export default Products
