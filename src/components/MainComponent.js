import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import { dishes } from "../global/dishes";
import DishDetail from "./DishDetailComponent";
import Menu from "./MenuComponent";

class MainComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dishes: dishes,
      selectedDish: null,
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }

  render() {
    return (
      <div className="MainComponent">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Restaurant menu</NavbarBrand>
          </div>
        </Navbar>
        <Menu
          dishes={this.state.dishes}
          onClick={(dishId) => this.onDishSelect(dishId)}
        />

        {this.state.selectedDish === undefined ? (
          <DishDetail
            dishDetail={
              this.state.dishes.filter(
                (dish) => dish.id === this.state.selectedDish
              )[0]
            }
          />
        ) : null}
      </div>
    );
  }
}

export default MainComponent;
