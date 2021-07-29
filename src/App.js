import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import FinishPage from "./pages/finish.page";
import LoginPage from "./pages/login.page";
import PhoneVerify from "./pages/phone-verify.page";

export default function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <LoginPage />
          </Route>
          <Route path="/verify">
            <PhoneVerify />
          </Route>
          <Route path="/finish">
            <FinishPage />
          </Route>
        </Switch>
    </Router>
  );
}