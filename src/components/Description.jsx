import React from "react";
import { Typography, Grid, Divider, Button } from "@material-ui/core";
import './App.css';

const Description = (props) => {
    if (props.oneline === true) {
    return (
        <Typography variant="caption" display="block" gutterBottom bold>
                <b>{props.title} </b>{props.value}
            </Typography>
            
            
        
        
    );
    } else {
        return (
            <div>
            <Typography variant="caption" display="block" gutterBottom bold>
                <b>{props.title} </b>
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
                {props.value}
            </Typography>
        </div>
        );
        
    }
}

export default Description;