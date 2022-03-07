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
          { props.noData ? (
            <h1>
              Wir haben leider keine Daten für dieses iPhone
              </h1>
          ): (
          <h1>
          Die Preistendenz ist{" "}
            <span className="results_highlited_part">{props.price}</span> 
          </h1>
          )
          }
        </div>
      )}
    </div>
  );
};

export default EstimationResultDetails;
