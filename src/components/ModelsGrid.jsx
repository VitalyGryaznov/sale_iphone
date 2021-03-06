import React from "react";
import ModelCard from "./ModelCard";
import { Grid } from "@material-ui/core";
import modelsList from "./constants/models";

const ModelGrid = () => {
  const getModelCard = modelObj => {
    return (
      <Grid item xs={4} sm={3} md={3}>
        <ModelCard {...modelObj} />
      </Grid>
    );
  };

  return (
    <Grid container 
    spacing={2} 
    direction="row"
    justify="center"
    alignItems="stretch">
      {modelsList.map(obj => getModelCard(obj))}
    </Grid>
  );
};

export default ModelGrid;