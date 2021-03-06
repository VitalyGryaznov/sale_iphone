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
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Link } from 'react-router-dom';
import './App.css';
import { chooseColor } from '../redux/rootListing';
import { chooseMemory } from '../redux/rootListing';
import { chooseCondition } from '../redux/rootListing';
import userEvent from "@testing-library/user-event";
import colorsList from "./constants/colors";
import memoryList from "./constants/memory";
import modelsList from "./constants/models";
import Description from "./Description";
import conditionList from "./constants/condition";
import Footer from "./Footer";

const Step1 = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const model = useSelector(state => state.model);

    const [color, setColor] = useState("");
    const [memory, setMemory] = useState("");
    const [condition, setCondition] = useState("");
    const [colorError, setColorError] = useState(false);
    const [memoryError, setMemoryError] = useState(false);
    const [conditionError, setConditionError] = useState(false);

    const handleEmptyStates = () => {
        var errors = false 
        if (color == "") {
            setColorError(true);
            errors = true
        }
        if (memory == "") {
            setMemoryError(true);
            errors = true
        }
        if (condition == "") {
            setConditionError(true);
            errors = true
        }
        return errors
    }
    
    const setCharacteristics = () => {
        dispatch(chooseColor(color));
        dispatch(chooseMemory(memory));
        dispatch(chooseCondition(condition));
        if (!(handleEmptyStates())) {
            history.push("./step-2");
        }
    }

    const handleColorState = (event) => {
        setColor(event.target.value);
        console.log(getTitleByValue(colorsList, event.target.value));
        setColorError(false);
    }

    const handleMemoryState = (event) => {
        setMemory(event.target.value);
        //getTitleByValue(memoryList, event.target.value)
        setMemoryError(false);
    }

    const handleConditionState = (event) => {
        setCondition(event.target.value);
        //getTitleByValue(memoryList, event.target.value)
        setConditionError(false);
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

    const getSelects = modelObj => {
        return (
          <MenuItem value={modelObj.value}>{modelObj.title}</MenuItem>
        );
      };

    const classes = useStyles();

    const getTitleByValue = (arrayName, value) => {
        return arrayName.find(x => x.value === value).title;
    }

    const imageUrl = modelsList.find(x => x.value === model).imageUrl;

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div>
            <Typography variantMapping='h2' align='center'>Wähle Farbe, Speicherkapazität und Zustand</Typography>
            <hr />
            <Grid container direction="row" spacing={3}>
                <Grid item xs={6} sm={6} md={6}>
                    <img src={imageUrl} className="selected_model_image"></img>
                </Grid>
                <Grid item  xs={6} sm={6} md={6}>
                   
                <Description oneline={true} title="Modell:" value={model != "" ? (getTitleByValue(modelsList, model)): ""}></Description>
                <Description oneline={true} title="Farbe:" value={color != "" ? (getTitleByValue(colorsList, color)): ""}></Description>
                <Description title="Speicherkapazität:" value={memory != "" ? (getTitleByValue(memoryList, memory)): ""}></Description>
                <Description oneline={true} title="Zustand:" value={condition != "" ? (getTitleByValue(conditionList, condition)): ""}></Description>
                </Grid>
            </Grid>
            <br />

            <div className="centered">
                <Grid container direction="column" alignItems="center" spacing={3}>
                    <Grid item>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-helper-label">Farbe</InputLabel>
                            <Select align='center'
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={color}
                                onChange={handleColorState}
                                error={colorError}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                {colorsList.map(obj => getSelects(obj))}
                            </Select>
                            <FormHelperText>Farbe auswählen</FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid item>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="select-memory">Speicherkapazität</InputLabel>
                            <Select align='center'
                                labelId="slect-memory-label"
                                id="slect-memory-label-helper"
                                value={memory}
                                onChange={handleMemoryState}
                                error={memoryError}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                {memoryList.map(obj => getSelects(obj))}
                            </Select>
                            <FormHelperText>Speicherkapazität auswählen</FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid item>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="select-condition">Zustand</InputLabel>
                            <Select align='center'
                                labelId="slect-condition-label"
                                id="slect-condition-label-helper"
                                value={condition}
                                onChange={handleConditionState}
                                error={conditionError}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                {conditionList.map(obj => getSelects(obj))}
                            </Select>
                            <FormHelperText>Zustand auswählen</FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="primary" onClick={setCharacteristics}>
                            Weiter
                        </Button>
                     
                    </Grid>
                </Grid>

            </div>
            <Footer></Footer>
        </div>
        
    )
}

export default Step1;