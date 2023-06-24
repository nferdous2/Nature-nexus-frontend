import * as React from 'react'
import Box from '@mui/material/Box'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'

export default function Gallery() {
  return (
    <Box sx={{ width: 1050, height: 950, m: 'auto' }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              className="gallery-img"
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  )
}

const itemData = [
  {
    img:
      'https://img.freepik.com/free-photo/herd-zebras-standing-savanna-field_181624-27921.jpg?size=626&ext=jpg&uid=R75991179&ga=GA1.2.408572447.1676891376&semt=sph',
    title: 'Bed',
  },
  {
    img:
      'https://img.freepik.com/free-photo/african-elephants-together-nature_475641-4.jpg?size=626&ext=jpg&uid=R75991179&ga=GA1.2.408572447.1676891376&semt=sph',
    title: 'Books',
  },
  {
    img:
      'https://img.freepik.com/premium-photo/close-up-black-leopards-face-generative-ai_791316-16498.jpg?size=626&ext=jpg&uid=R75991179&ga=GA1.2.408572447.1676891376&semt=sph',
    title: 'Sink',
  },
  {
    img:
      'https://img.freepik.com/free-photo/grey-crowned-cranes-walking-through-field-covered-grass-sunlight_181624-17230.jpg?size=626&ext=jpg&uid=R75991179&ga=GA1.2.408572447.1676891376&semt=sph',
    title: 'Kitchen',
  },
  {
    img:
      'https://img.freepik.com/free-photo/closeup-green-sea-turtle-swimming-underwater-lights_181624-25236.jpg?size=626&ext=jpg&uid=R75991179&ga=GA1.2.408572447.1676891376&semt=sph',
    title: 'Blinds',
  },
  {
    img:
      'https://img.freepik.com/free-photo/lion-cub-sitting-resting-grass_181624-61717.jpg?size=626&ext=jpg&uid=R75991179&ga=GA1.1.408572447.1676891376&semt=sph',
    title: 'Chairs',
  },
  {
    img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
    title: 'Laptop',
  },
  {
    img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
    title: 'Doors',
  },
  {
    img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
    title: 'Storage',
  },
  {
    img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
    title: 'Candle',
  },
  {
    img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
    title: 'Coffee table',
  },
]
