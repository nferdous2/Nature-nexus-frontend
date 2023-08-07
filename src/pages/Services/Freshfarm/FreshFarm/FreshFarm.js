import React from 'react'
import FreshFarmBanner from '../FreshFarmBanner/FreshFarmBanner'
import Category from '../Category/Category'
import MostStory from '../MostStory/MostStory'
import './FreshFarm.css'
import FarmService from '../FarmService'
import Review from './Review/Review'
import Products from '../Products/Products'
import Product from '../Product/Product'

const FreshFarm = () => {
  return (
    <div>
      <FreshFarmBanner></FreshFarmBanner>
      <Category></Category>
      <Products></Products>
      {/* <Product></Product> */}
      {/* <hr /> */}
      <MostStory></MostStory>
      {/* <VHome></VHome> */}
      <Review></Review>
      <FarmService></FarmService>
    </div>
  )
}

export default FreshFarm
