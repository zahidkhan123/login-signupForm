import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Signup from "./components/Signup";
import SignIn from "./components/SignIn";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Signup} />
        <Route path="/sign-in" component={SignIn} />
        {/* lsdjlsjdfjsfjlskf */}
      </Switch>
    </div>
  );
}

export default App;
