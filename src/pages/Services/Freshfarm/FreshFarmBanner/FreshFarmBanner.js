import React from 'react'
import './FreshFarmBanner.css'
import deliveryicon from '../../../../img/delivery-icon-2.webp'
import { Typography ,Grid, Box} from '@mui/material'

const FreshFarmBanner = () => {
  return (
    <Box
      className="freshfarmhero"
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
     <Grid item xs={12}>
        <Typography variant="h3" sx={{ fontWeight: 'bold',  textAlign:" center",  color: "#424242",
         marginTop: { xs: '5rem', md: '10rem' } ,fontSize:{xs:'2rem',md:'6rem'},marginLeft: {md:"45%"},
         marginBottom: {  md: '4rem' }
         }}>
          ORGANIC
          <br />
          GROCERY
        </Typography>
      </Grid>

    

      <div className="delivery-icon-text">
        <img src={deliveryicon} />
        <p>Free delivery around 5 KM</p>
      </div>
      <button className="shop-online-btn">Shop Now</button>
    </Box>
  )
}

export default FreshFarmBanner
