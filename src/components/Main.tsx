import React from "react";
import { Switch, Route } from "react-router-dom";
import Step1 from "./EbayEstimatorStep1";
import Step2 from "./EbayEstimatorStep2";
import Result from "./EstimationResult";
import Impressum from "./Impressum";
import Dataschutz from "./Dataschutz";
import WaysToSellIphone from "./articles/WaysToSellIphone";

const Main = () => (
  <main>
    <Switch>
      <Route path="/iphone-ankauf-wert-ebay/result">
        <Result />
      </Route>
      <Route path="/iphone-ankauf-wert-ebay/step-2">
        <Step2 />
      </Route>
      <Route path="/iphone-ankauf-wert-ebay">
        <Step1 />
      </Route>
      <Route path="/impressum">
        <Impressum />
      </Route>
      <Route path="/dataschutz">
        <Dataschutz />
      </Route>
      <Route path="/">
        <WaysToSellIphone />
      </Route>
    </Switch>
  </main>
);

export default Main;
