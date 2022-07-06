import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from './Components/UI/Layout';

import Home from './Components/Home';
import About from './Components/About';

export default function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route component={About} path="/about"/>
          <Route component={Home} path="/"/>
        </Switch>
      </Layout>
    </Router>
  )
}
