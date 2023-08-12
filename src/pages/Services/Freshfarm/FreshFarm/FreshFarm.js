import React from 'react'
import FreshFarmBanner from '../FreshFarmBanner/FreshFarmBanner'
import Category from '../Category/Category'
import FarmService from '../FarmService'
import Review from './Review/Review'
import FarmProduct from './FarmProduct'
import MostStory from './MostStory'

const FreshFarm = () => {
  return (
    <div>

      <FreshFarmBanner></FreshFarmBanner>
      <Category></Category>
      <FarmProduct/>
      <MostStory></MostStory>
      <Review></Review>
      <FarmService></FarmService>
    </div>
  )
}

export default FreshFarm
