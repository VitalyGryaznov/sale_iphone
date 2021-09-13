import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import './EbayEstimator.scss';
import PropertySelect from './PropertySelect';
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../redux/storets";

const EstimationResultDetails = (props) => {
    
    const phoneState = useSelector((state: RootState) => state);
    const [price, setPrice] = useState("");
    const [days, setDays] = useState("");
    const [loading, setLoading] = useState(true);
   
    const getEstimation = async () => {
        console.log(JSON.stringify(phoneState.phone));
        //const response = await fetch("http://localhost:5000/get_sales_estimation", { 
        const response = await fetch("https://www.mein-iphone-verkaufen.de/api/get_sales_estimation", { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(phoneState.phone)
        }).then(res=> res.json())
            .then(res=> {
                setPrice(res.price);
                setDays(res.days);
            })
            .then(res=> setLoading(false));
    }

    useEffect(() => {
        getEstimation();
    
        
    }, []);

    return <div>
        <h1 >Es dauert ungefähr {days} Tage, um es bei eBay für {price}€ zu verkaufen*</h1>
    </div>
}

export default EstimationResultDetails;