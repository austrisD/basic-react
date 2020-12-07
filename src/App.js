import { Navbar, NavbarBrand } from "reactstrap";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container"></div>
        <NavbarBrand href="/">my god</NavbarBrand>
      </Navbar>
    </div>
  );
}

export default App;
