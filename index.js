import React from 'react';
import ReactDOM from 'react-dom';
import SingleTrain from './SingleTrain';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={TrainSchedule} />
      <Route path="/train/:trainId" component={SingleTrain} />
    </Switch>
  </Router>,
  document.getElementById('root')
);