import React from 'react';
import {BrowserRouter, Redirect, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import Main from './Components/Content/Main';
import store from './redux/store';
import './Style.scss';
import Layout from './Components/ComponentLayout/Layout/Layout';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/table" exact component={Main} />
            <Route path="/chart" component={Main} />
            <Route path="/map" component={Main} />
            <Redirect from="/*" to="/table" exact />
          </Switch>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
