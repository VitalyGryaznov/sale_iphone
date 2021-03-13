import { Typography } from '@material-ui/core';
import React, { useState } from 'react';
import ModelsGrid from "./ModelsGrid";
import Footer from "./Footer";
import './App.css';




function HomePageContent() {
    return (
            <div>
                <img src="/assets/teaser.png" className="teaser_image"></img>
                {/*Überblick über den iPhone Ankauf Wert verschaffen



Finde heraus, wie schnell und für wie viel du dein iPhone bei eBay verkaufen könntest                
                */}
                <Typography variant="h5" component="h1">Wähle das Modell deines iPhones</Typography>
                <hr />
                <ModelsGrid></ModelsGrid>
                <Footer></Footer>
            </div>
        
    );
}

export default HomePageContent;