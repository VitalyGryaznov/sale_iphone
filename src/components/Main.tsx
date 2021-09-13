import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePageContent from './HomePageContent'
import Step1 from './EbayEstimatorStep1'
import Step2 from './EbayEstimatorStep2'
import Step3 from './Step3'
import Result from './EstimationResult'
import Impressum from './Impressum'
import Dataschutz from './Dataschutz'

const Main = () => (
  <main>
    <Switch>
      <Route path="/iphone-verkaufen-estimate/result">
        <Result />
      </Route>
      <Route path="/iphone-verkaufen-estimate/step-2">
        <Step2 />
      </Route>
      <Route path="/iphone-verkaufen-estimate">
        <Step1 />
      </Route>
      <Route path="/impressum">
        <Impressum />
      </Route>
      <Route path="/dataschutz">
        <Dataschutz />
      </Route>
      <Route path="/">
        <HomePageContent />
      </Route>
    </Switch>
  </main>
)

export default Main
