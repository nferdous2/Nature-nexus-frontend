import React from 'react'
import FreshFarmBanner from '../FreshFarmBanner/FreshFarmBanner'
import Category from '../Category/Category'
import MostStory from '../MostStory/MostStory'
import './FreshFarm.css'
import FarmService from '../FarmService'
import Review from './Review/Review'
import Product from '../Product/Product'

const FreshFarm = () => {
  return (
    <div>
      <FreshFarmBanner></FreshFarmBanner>
      <Category></Category>
      <Product></Product>
      {/* <hr /> */}
      <MostStory></MostStory>
      {/* <VHome></VHome> */}
      <Review></Review>
      <FarmService></FarmService>
    </div>
  )
}

export default FreshFarm
