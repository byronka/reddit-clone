import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import DetailPage from "./DetailPage";
import HomePage from "./HomePage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/posts/:id">
          <DetailPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
