import "./EstimationResultDetails.scss";
import { CircularProgress } from "@material-ui/core";

const EstimationResultDetails = (props) => {
  return (
    <div className="results_container">
      {props.isLoading ? (
        <div>
          <h1 className="results_title">Berechnung einer Prognose</h1>
          <div>
            <CircularProgress />
          </div>
        </div>
      ) : (
        <div>
          <h1 className="results_title">Verkaufsprognose:</h1>
          <h1>
            Es dauert ungefähr{" "}
            <span className="results_highlited_part">{props.days} Tage</span>,
            um es bei eBay für{" "}
            <span className="results_highlited_part">{props.price}€</span> zu
            verkaufen*
          </h1>
        </div>
      )}
    </div>
  );
};

export default EstimationResultDetails;
