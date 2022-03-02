import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Movies from './components/movies';
import Navbar from './components/navbar';
import Customer from './components/customer';
import Rentals from './components/rentals';
import NotFound from './components/not-found';
import MovieForm from './components/moviesform';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/movies/:id" component={MovieForm} />
        <Route path="/movies" component={Movies} />
        <Route path="/customers" component={Customer} />
        <Route path="/rentals" component={Rentals} />
        <Route path="/not-found" component={NotFound} />
        <Redirect from="/" exect to="/movies" />
        <Redirect path="not-found"/>
      </Switch>
    </div>
  );
}

export default App;
