import "./EbayEstimator.scss";
import { CircularProgress } from "@material-ui/core";

const EstimationResultDetails = (props) => {

  return (
    <div>
      {props.isLoading ? (
            <div className="centered">
              <CircularProgress />
            </div>
          ) : (
            <h1>
        Es dauert ungefähr {props.days} Tage, um es bei eBay für {props.price}€ zu
        verkaufen*
      </h1>
          )}
      
    </div>
  );
};

export default EstimationResultDetails;
