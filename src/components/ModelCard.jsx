import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { chooseModel } from '../redux/rootListing';
import modelsList from "./constants/models";
import './App.css';


const useStyles = makeStyles({
  root: {
    textTransform: 'none',
    textDecoration: 'none',
    textAlign: 'center',
  },
  iphoneCard: {
    borderRadius: 16,
    transition: '0.2s',
    '&:hover': {
      transform: 'scale(1.1)',
    },
    minHeight: "210px",
  },
});

const SimpleCard = props => {
  const { title, imageUrl } = props;
  const dispatch = useDispatch();
  const history = useHistory();
  const setModelFrom = () => {
    dispatch(chooseModel(modelsList.find(x => x.title === title).value));
    history.push("/iphone-verkaufen-estimate/step-1");
  };

  return (
 
    <div  onClick={setModelFrom} className={useStyles().iphoneCard}
    align="center" 
   
      >
      <div className="padding5">
        <img src={imageUrl} className="iphone_grid_image"></img>
        </div>
      <Typography>{title}</Typography>
     
    </div>
 

);
  

  return (
    <Link className={useStyles().root} onClick={setModelFrom} to='/iphone-verkaufen-estimate/step-1' >
      <Card className={useStyles().actionArea}>
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '15px' }}>
          <img src={imageUrl} className="iphone_grid_image"></img>
        </div>
        <CardHeader subheader={title} />
      </Card>
    </Link>

  );

  
};

export default SimpleCard;