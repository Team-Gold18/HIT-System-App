import Register from "./components/Register";
import Navbar from "./components/Navbar/navbar";
import Home from "./components/Home";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import EmployeeDetails from "./components/EmployeeDetails";
import EmployeeList from "./components/EmployeeList";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/employee/:id" component={EmployeeDetails} />
          <Route path="/employee" component={EmployeeList} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
