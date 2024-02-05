import React from 'react'
import './TreePlanTationbanner.css'

const TreePlantationBanner = () => {
  return (
    <div
      className="thero"
      style={{
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      }}
    >
      <p className="bannertext">
        Plants are friends
        <br />
        that always keep <br></br>you company
      </p>
      <button className="explore-btn">Explore</button>
      
    </div>
  )
}

export default TreePlantationBanner
