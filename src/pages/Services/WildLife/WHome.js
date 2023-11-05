import React from 'react'
import Waboutus from './Waboutus'
import WildlifeBanner from './WildlifeBanner/WildlifeBanner'
import ChaingingNature from './ChaingingNature'
import Sustainable from './Sustainable'
import Animal from './Animal'
import Animals from './Animals/Animals'
// import AnimalSlider from './AnimalSlider/AnimalSlider'

const WHome = () => {
  return (
    <div>
      <WildlifeBanner />

      <Waboutus />
      {/* <Animal /> */}
      <Animals/>
      
      <ChaingingNature />
      <Sustainable />
    </div>
  )
}

export default WHome
