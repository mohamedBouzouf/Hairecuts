import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import HomeContainer from '../containers/HomeContainer';
import ContactContainer from '../containers/ContactContainer';
import PageNotFound from './views/pageNotFound';
import Footer from '../modules/common/Footer';
import Header from '../modules/common/Header';
export const App = ({history}) => (
      <ConnectedRouter history={history}>
        <Header />
        <Switch>
         <Route exact path="/" component={HomeContainer} />
         <Route path="/contact" component={ContactContainer} />
         <Route component={PageNotFound} />
        </Switch>
        <Footer />
      </ConnectedRouter>
);