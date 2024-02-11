import React, { useEffect, useState } from 'react'
import FreshFarmBanner from './FreshFarmBanner/FreshFarmBanner'
import Category from './Category/Category'
import FarmProduct from './FarmProduct'
import MostStory from './MostStory'
import Review from './Review'
import FarmService from './FarmService'

const FreshFarm = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    // Fetch all products from your API
    fetch('http://localhost:8000/review')
      .then((response) => response.json())
      .then((data) => {
        // Filter the review with the "freshfood" category
        const reviews = data.filter((product) => product.category === 'freshfood');
        setReview(reviews);
      })
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <div>

      <FreshFarmBanner></FreshFarmBanner>
      <Category></Category>
      <FarmProduct />
      <MostStory></MostStory>
      <Review review={review}></Review>
      <FarmService></FarmService>
    </div>
  )
}

export default FreshFarm
