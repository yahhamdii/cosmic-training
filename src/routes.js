import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Marketing from './pages/Marketing';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Layout} />
      <Route
        path="/cosmic"
        render={() => (
          <Layout>
            <div style={{ margin: '100px 0' }}>
              <Switch>
                <Route path="/cosmic/marketing-relationnel" exact component={Marketing} />
              </Switch>
            </div>
          </Layout>
        )}
      />
    </Switch>
  </BrowserRouter>
);

export default Routes;
