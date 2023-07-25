import React from 'react'
import Banner from '../../../Home/Banner/Banner'
import FreshFarmBanner from '../FreshFarmBanner/FreshFarmBanner'
import  Category  from '../Category/Category';
import MostStory from '../MostStory/MostStory';
import './FreshFarm.css'
import FarmService from '../FarmService';
import Review from './Review/Review';


const FreshFarm = () => {
  return (
    <div>
     
      <FreshFarmBanner></FreshFarmBanner>
      <Category></Category>
      <hr />
      <MostStory></MostStory>
      {/* <VHome></VHome> */}
         <Review></Review>
      <FarmService></FarmService>
   
    </div>
  )
}

export default FreshFarm
