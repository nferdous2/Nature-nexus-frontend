import React from 'react'
import FreshFarmBanner from './FreshFarmBanner/FreshFarmBanner'
import Category from './Category/Category'
import FarmProduct from './FarmProduct'
import MostStory from './MostStory'
import Review from './Review'
import FarmService from './FarmService'

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
