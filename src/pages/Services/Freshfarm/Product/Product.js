import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from '@mui/material'
import React from 'react'
import './Product.css'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { Link } from 'react-router-dom'

const Product = (props) => {
  const { name, price, image, id } = props.product
  console.log(props.book)
  return (
    <Grid item xs={12} sm={6} md={3} lg={3}>
      <Card
        sx={{
          display: 'flex',
          alignItems: 'center',
          // justifyContent: 'center',
          width: 370,
          height: 250,
          marginTop: 3,
          marginBottom: 2,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
              {name}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {price}
            </Typography>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <Link to={`/bookDataCollection/${id}`}>
              <button className="button">Details</button>
            </Link>
          </CardContent>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 200, height: 250 }}
          image={image}
          alt="Live from space album cover"
        />
      </Card>
    </Grid>
  )
}

export default Product
