import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePageContent from './HomePageContent'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Result from './Result'
import Impressum from './Impressum'
import Dataschutz from './Dataschutz'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={HomePageContent}/>
      <Route path='/iphone-verkaufen-estimate/step-1' component={Step1}/>
      <Route path='/iphone-verkaufen-estimate/step-2' component={Step2}/>
      <Route path='/iphone-verkaufen-estimate/step-3' component={Step3}/>
      <Route path='/iphone-verkaufen-estimate/result' component={Result}/>
      <Route path='/impressum' component={Impressum}/>
      <Route path='/dataschutz' component={Dataschutz}/>
    </Switch>
  </main>
)

export default Main
