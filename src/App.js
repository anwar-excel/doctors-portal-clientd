
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Service from './Pages/Home/Service/Service';
import Home from './Pages/Home/Home/Home';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Login from './Pages/Login/Login/Login';

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
          <Route exact path='/appointment'>
            <Appointment></Appointment>
          </Route>
          <Route exact path='/login'>
            <Login></Login>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
