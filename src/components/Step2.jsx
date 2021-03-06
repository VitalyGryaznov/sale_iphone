import React, { useEffect, useState } from "react";
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
import { Select, Switch, FormControlLabel, FormControl, Checkbox, TextField, InputAdornment } from '@material-ui/core';
import './App.css';
import { chooseNuberOfReviews, chooseReturnPolicy, chooseFeedback, chooseHaveFeedback, chooseShippingCost } from '../redux/rootListing';
import colorsList from "./constants/colors";
import memoryList from "./constants/memory";
import modelsList from "./constants/models";
import conditionList from "./constants/condition";
import returnPolicyList from "./constants/returnPolicy";
import shippingCostList from "./constants/shippingCost";
import Description from "./Description";
import Footer from "./Footer";


const Step2 = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const model = useSelector(state => state.model);
    const color = useSelector(state => state.color);
    const memory = useSelector(state => state.memory);
    const condition = useSelector(state => state.condition);

    const [returnPolicy, setReturnPolicy] = useState("");
    const [shippingCost, setShippingCost] = useState("");
    const [feedback, setFeedback] = useState("");
    const [numberOfReviews, setNumberOfReviews] = useState("");
    const [feedbackError, setFeedbackError] = useState("");
    const [numOfReviewsError, setNumOfReviewsError] = useState("");
    const [returnPolicyError, setReturnPolicyError] = useState(false);
    const [shippingCostError, setShippingCostError] = useState(false);
    const [state, setState] = useState({
        checkedA: true,
        haveFeedback: true,
    });

    const getSelects = modelObj => {
        return (
            <MenuItem value={modelObj.value}>{modelObj.title}</MenuItem>
        );
    };

    const getTitleByValue = (arrayName, value) => {
        return arrayName.find(x => x.value === value).title;
    }

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const handleReturnPolicyState = (event) => {
        setReturnPolicy(event.target.value);
        setReturnPolicyError(false);
    }

    const handleShippingCostState = (event) => {
        setShippingCost(event.target.value);
        setShippingCostError(false);
    }

    const handleEmptyStates = () => {
        var errors = false
        if (returnPolicy == "") {
            setReturnPolicyError(true);
            errors = true
        }
        if (shippingCost == "") {
            setShippingCostError(true);
            errors = true
        }
        if (state.haveFeedback && feedback == "") {
            setFeedbackError("Bitte geben Sie Ihre Prozentsatz ein.");
            errors = true
        }
        if (state.haveFeedback && numberOfReviews == "") {
            setNumOfReviewsError("Bitte geben Sie Ihre Anzahl ein.");
            errors = true
        }
        return errors
    }

    const handleFeedbackState = (event) => {
        setFeedback(event.target.value);
        const reg = RegExp(/^\d*$/).test(event.target.value);
        if (!reg) {
            setFeedbackError('Ihre Prozentsatz darf nur die Zahlen 0-9 enthalten.');
        } else {
            setFeedbackError("");
        }
    }

    const handleNumberOfReviewsState = (event) => {
        setNumberOfReviews(event.target.value);
        const reg = RegExp(/^\d*$/).test(event.target.value);
        if (!reg) {
            setNumOfReviewsError('Ihre Anzahl darf nur die Zahlen 0-9 enthalten.');
        } else {
            setNumOfReviewsError("");
        }
    }

    const handleSubmnit = () => {
        dispatch(chooseReturnPolicy(returnPolicy));
        dispatch(chooseShippingCost(shippingCost));
        if (state.haveFeedback === true) {
            dispatch(chooseNuberOfReviews(numberOfReviews));
            dispatch(chooseFeedback(feedback));
        }
        dispatch(chooseHaveFeedback(state.haveFeedback));
        const emptyErrors = handleEmptyStates();
        if ((!state.haveFeedback) && (returnPolicyError == "" && shippingCostError == "") && (!emptyErrors)) {
            history.push("./result");
        }
        else if (!((emptyErrors) || ((feedbackError != "") || (numOfReviewsError != "")))) {
            history.push("./result");
        }

    }


    const imageUrl = modelsList.find(x => x.value === model).imageUrl;

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

    }));

    const classes = useStyles();

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])


    return (
        <div>
            <Typography variantMapping='h2' align='center'>Versand, Rücknahmen und eBay-Profil</Typography>
            <hr />
            <Grid container direction="row" spacing={3}>
                <Grid item xs={6} sm={6} md={6}>
                    <img src={imageUrl} className="selected_model_image"></img>
                </Grid>
                <Grid item xs={6} sm={6} md={6}>
                    <Description oneline={true} title="Modell:" value={model != "" ? (getTitleByValue(modelsList, model)) : ""}></Description>
                    <Description oneline={true} title="Farbe:" value={color != "" ? (getTitleByValue(colorsList, color)) : ""}></Description>
                    <Description title="Speicherkapazität:" value={memory != "" ? (getTitleByValue(memoryList, memory)) : ""}></Description>
                    <Description oneline={true} title="Zustand:" value={condition != "" ? (getTitleByValue(conditionList, condition)) : ""}></Description>
                    <Description title="Rücknahmen:" value={returnPolicy != "" ? (getTitleByValue(returnPolicyList, returnPolicy)) : ""}></Description>
                    <Description title="Versand:" value={shippingCost != "" ? (getTitleByValue(shippingCostList, shippingCost)) : ""}></Description>
                    {state.haveFeedback === true ? (<Description oneline={true} title="Bewertungen:" value={numberOfReviews}></Description>) :
                        (<div></div>)}
                    {state.haveFeedback === true ? (<Description oneline={true} title="Positive Bewertungen:" value={feedback + "\%"}></Description>) :
                        (<div></div>)}
                </Grid>
            </Grid>
            <br />
            <div className="centered">
                <Grid container direction="column" alignItems="center" spacing={3}>
                    <Grid item>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-helper-label">Rücknahmen</InputLabel>
                            <Select align='center'
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={returnPolicy}
                                onChange={handleReturnPolicyState}
                                required
                                error={returnPolicyError}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                {returnPolicyList.map(obj => getSelects(obj))}
                            </Select>
                            <FormHelperText>Rücknahmenoption auswählen</FormHelperText>
                        </FormControl>

                    </Grid>
                    <Grid item>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-helper">Versand</InputLabel>
                            <Select align='center'
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-sel"
                                value={shippingCost}
                                required
                                onChange={handleShippingCostState}
                                error={shippingCostError}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                {shippingCostList.map(obj => getSelects(obj))}
                            </Select>
                            <FormHelperText>Versandoption auswählen</FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid item>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={state.haveFeedback}
                                    onChange={handleChange}
                                    name="haveFeedback"
                                    color="primary"
                                />
                            }
                            label="Ich habe bereits Bewertungen als eBay-Verkäufer"
                        />

                    </Grid>
                    {state.haveFeedback === true ? (
                        <Grid item>
                            <TextField id="numberOfReviews" label="Bewertungen"
                                value={numberOfReviews}
                                onChange={handleNumberOfReviewsState}
                                autoComplete="off"
                                inputProps={{ maxLength: 7 }}
                                required
                                error={numOfReviewsError != ""}
                                helperText={(numOfReviewsError != "") ? (numOfReviewsError) : ("Anzahl der Bewertungen eingeben.")}
                            />
                        </Grid>) : (<div></div>)}
                    {state.haveFeedback === true ? (
                        <Grid item>
                            <TextField id="feedbackRate" label="Positiven Bewertungen"
                                value={feedback}
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">%</InputAdornment>,
                                }}
                                onChange={handleFeedbackState}
                                autoComplete="off"
                                inputProps={{ maxLength: 7 }}
                                required
                                error={feedbackError != ""}
                                helperText={(feedbackError != "") ? feedbackError : "Prozentsatz der positiven Bewertungen eingeben."}
                            />
                        </Grid>) : (<div></div>)}
                    <Grid item>
                        <Button variant="contained" color="primary" onClick={handleSubmnit}>
                            Verkaufsprognose erhalten
                        </Button>
                    </Grid>
                </Grid>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Step2;