import "./App.css";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import Crud from "./Component/Crud";
import Navbar from "./Component/NavBar";
import Allup from "./Component/Userpost"
import Addup from "./Component/Adduserpost";
import Edit from "./Component/editUser";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Crud} />
        <Route exact path="/all" component={Allup} />
        <Route exact path="/add" component={Addup} />
        <Route exact path="/edit/:id" component={Edit} />
      </div>
    </BrowserRouter>
  );
}

export default App;
