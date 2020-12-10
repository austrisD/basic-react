import { Navbar, NavbarBrand } from "reactstrap";
import { dishes } from "./global/dishes";
import Menu from "./components/MenuComponent";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">my god</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={dishes} />
    </div>
  );
}

export default App;
