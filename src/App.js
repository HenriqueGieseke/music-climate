import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { GlobalStyle } from './GlobalStyles';
import Favorites from './pages/Favorites/Favorites';
import Search from './pages/Search/Search';

function App() {
  return (
    <Router>
      <div className="App">
        <GlobalStyle />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Search} />
          <Route path="/favorites" exact component={Favorites} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
