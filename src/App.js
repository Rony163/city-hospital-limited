import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Details from './Pages/Details/Details';
import Doctors from './Pages/Doctors/Doctors';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/details/:id">
            <Details></Details>
          </Route>
          <Route path="/doctors">
            <Doctors></Doctors>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
