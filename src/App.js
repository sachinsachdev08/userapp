import './App.css';
import Homepage from './components/homepage';
import UserProfile from './components/userprofile';
import { Switch , Route } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Homepage/>
      </Route>
      <Route exact path="/users/:id">
        <UserProfile/>
      </Route>
      <Route exact path="/users/add">
        <UserProfile/>
      </Route>

    </Switch>
    
  );
}

export default App;
