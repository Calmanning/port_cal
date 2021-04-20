import Navi from "./components/navi";
import Landing from "./pages/Landing";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
    <div>
      <Navi />
          <Switch>
            <Route exact path={["/"]}>
            <Landing />
            </Route>
            <Route exact path={["/port"]}>
            <Portfolio />
            </Route>
          </Switch>
    </div>
    </Router>
  );
}

export default App;
