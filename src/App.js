import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Result from './components/Result';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Step1}></Route>
        <Route path="/step2" component={Step2}></Route>
        <Route path="/step3" component={Step3}></Route>
        <Route path="/result" component={Result}></Route>
      </Switch>
    </Router>
  );
}

export default App;
