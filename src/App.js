
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Service from './Pages/Home/Service/Service';
import Home from './Pages/Home/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/service'>
            <Service></Service>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
