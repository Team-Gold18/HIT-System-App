import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Home from "./components/Home"
import ImgSlider from "./components/ImgSlider";
import Register from "./components/Register/Register";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/login">
         <Login/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
