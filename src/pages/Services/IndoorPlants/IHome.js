import React from 'react';
import Products from './Products';
import PFacilities from './PFacilities';
import Offers from './Offers';
import TreePlantationBanner from './TreePlanTationbanner';
import Donation from './Donation';

const IHome = () => {
    return (
        <div style={{backgroundColor:"white"}}>
        <TreePlantationBanner/>
            <Products/>
            <PFacilities/>
            <Offers/>
            <Donation/>
        </div>
    );
};

export default IHome;