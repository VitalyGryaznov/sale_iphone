import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Typography, Grid, Divider, Button, CircularProgress } from "@material-ui/core";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import './App.css';
import colorsList from "./constants/colors";
import memoryList from "./constants/memory";
import modelsList from "./constants/models";
import conditionList from "./constants/condition";
import returnPolicyList from "./constants/returnPolicy";
import shippingCostList from "./constants/shippingCost";
import Description from "./Description";
import Footer from "./Footer";


const Result = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const model = useSelector(state => state.model);
    const color = useSelector(state => state.color);
    const memory = useSelector(state => state.memory);
    const returnPolicy = useSelector(state => state.returnPolicy);
    const shippingCost = useSelector(state => state.shippingCost);
    const feedback = useSelector(state => state.feedback);
    const numberOfReviews = useSelector(state => state.numberOfReviews);
    const haveFeedback = useSelector(state => state.haveFeedback);
    const condition = useSelector(state => state.condition);

    const getTitleByValue = (arrayName, value) => {
        return arrayName.find(x => x.value === value).title;
    }

    
    
    const useStyles = makeStyles((theme) => ({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,

        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
        startFromNewLine: {
            display: "block"
        },
        result: {
            marginBottom: theme.spacing(2),
            

        },
        resultText: {
            color: "blue"
        }

    }));

    const classes = useStyles();

    const [price, setPrice] = useState("");
    const [days, setDays] = useState("");
    const [loading, setLoading] = useState(true);

    const data = {
        model: model,
        color: color,
        memory: memory,
        return_policy: returnPolicy,
        no_feedback_yet: !haveFeedback,
        selers_feedback: feedback,
        shipping_cost: shippingCost,
        number_of_reviews: numberOfReviews,
        condition: condition
    };

    const getEstimation = async () => {
        
        //const response = await fetch("http://localhost:5000/get_sales_estimation", { 
        const response = await fetch("http://3.65.73.151/api/get_sales_estimation", { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
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

    const imageUrl = modelsList.find(x => x.value === model).imageUrl;

    const handleSubmnit = () => {
        history.push("/");
    }

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])


    return (
        <div>
            <div className={classes.result}>
                <Typography>Verkaufsprognose:</Typography>
                <Paper >
                    {loading ? (<div className="centered"><CircularProgress /></div>) : (
                        <div className={classes.resultText}>
                            <Typography className="centered" variant='h6'>Es dauert ungefähr {days} Tage, um es bei eBay für {price}€ zu verkaufen</Typography>
                        </div>
                    )}
                </Paper>
            </div>
            <Grid container direction="row" spacing={3}>
                <Grid item xs={6} sm={6} md={6}>
                    <img src={imageUrl} className="selected_model_image"cd ></img>
                </Grid>
                <Grid item xs={6} sm={6} md={6}>
                <Description oneline={true} title="Modell:" value={model != "" ? (getTitleByValue(modelsList, model)): ""}></Description>
                <Description oneline={true} title="Farbe:" value={color != "" ? (getTitleByValue(colorsList, color)): ""}></Description>
                <Description title="Speicherkapazität:" value={memory != "" ? (getTitleByValue(memoryList, memory)): ""}></Description>
                <Description oneline={true} title="Zustand:" value={condition != "" ? (getTitleByValue(conditionList, condition)): ""}></Description>
                <Description title="Rücknahmen:" value={returnPolicy != "" ? (getTitleByValue(returnPolicyList, returnPolicy)): ""}></Description>
                <Description title="Versand:" value={shippingCost != "" ? (getTitleByValue(shippingCostList, shippingCost)): ""}></Description>
                {haveFeedback === true ? (<Description oneline={true} title="Bewertungen:" value={numberOfReviews}></Description>):
                (<div></div>)}
                {haveFeedback === true ? (<Description oneline={true}  title="Positive Bewertungen:" value={feedback + "\%"}></Description>):
                (<div></div>)}
                </Grid>
            </Grid>
            <br />
            <div className="centered">
                <Grid container direction="column" alignItems="center" spacing={4}>
                    <Grid item>
                            <Button variant="contained" color="primary" rowsMin="4" onClick={handleSubmnit}>
                            Startseite
                        </Button>
                    </Grid>
                </Grid>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Result;