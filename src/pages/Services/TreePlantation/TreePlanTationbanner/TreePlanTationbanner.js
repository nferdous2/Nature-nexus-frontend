import React from 'react'
import './TreePlanTationbanner.css'
import { Typography } from '@mui/material'

const TreePlantationBanner = () => {
  return (
    <div
      className="thero"
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* <p className="subtitle">Explore our animal</p> */}
      <p className="bannertext">
        Plants are friends
        <br />
        that always keep <br></br>you company
      </p>
      {/* <p className="indoor">"Indoors"</p> */}

      <button className="explore-btn">Explore</button>
      <button className="explore-btn2">Explore</button>
    </div>
  )
}

export default TreePlantationBanner
