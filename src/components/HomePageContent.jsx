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

узнай как быстро и за сколько ты можешь продать свой айфон на ебей

find out how quickly and for how much you can sell your iPhone on ebay

Wie schnell wird Ihr iPhone bei ebay verkauft?

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