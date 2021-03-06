import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { chooseModel } from '../redux/rootListing';
import { Typography, Grid, Divider, Button } from "@material-ui/core";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import { TextareaAutosize, TextField, FormControl, OutlinedInput } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './App.css';
import { chooseTextDescription } from '../redux/rootListing';
import colorsList from "./constants/colors";
import memoryList from "./constants/memory";
import modelsList from "./constants/models";
import returnPolicyList from "./constants/returnPolicy";
import shippingCostList from "./constants/shippingCost";
import Description from "./Description";



const Step3 = () => {
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
        console.log(arrayName)
        console.log(value)
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
        }
    }));

    const classes = useStyles();

    const [textDesctiption, setTextDescription] = useState("");

    const handleSubmnit = () => {
        dispatch(chooseTextDescription(textDesctiption));
        history.push("./result");
    }

    const handleChange = (event) => {
        setTextDescription(event.target.value);
    }


    const imageUrl = modelsList.find(x => x.value === model).imageUrl;

    return (
        <div>
            <Typography variantMapping='h2' align='center'>Textbeschreibung</Typography>
            <hr />
            <Grid container direction="row" spacing={3}>
                <Grid item xs={6} sm={6} md={6}>
                    <img src={imageUrl} className="selected_model_image"></img>
                </Grid>
                <Grid item xs={6} sm={6} md={6}>
                
            
                <Description oneline={true} title="Modell:" value={model != "" ? (getTitleByValue(modelsList, model)): ""}></Description>
                <Description oneline={true} title="Farbe:" value={color != "" ? (getTitleByValue(colorsList, color)): ""}></Description>
                <Description title="Speicherkapazität:" value={memory != "" ? (getTitleByValue(memoryList, memory)): ""}></Description>
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
                    <Grid item container direction="column" alignItems="left" >

                    </Grid>
                    <Grid item>
                        <Typography>Textbeschreibung (Optional):</Typography>
                    </Grid>



                    <Grid item>
                        <TextareaAutosize aria-label="empty textarea" placeholder="Geben Sie hier Ihre Textbeschreibung ein, wenn Sie eine genauere Prognose erhalten möchten." className="bigTextArea" 
                            value={textDesctiption}
                            onChange={handleChange}
                        />

                    </Grid>
                    
                    <Grid item>
                            <Button variant="contained" color="primary" onClick={handleSubmnit}>
                            Verkaufsprognose erhalten
                        </Button>
                    </Grid>
                </Grid>


            </div>
        </div>

    )



}

export default Step3;