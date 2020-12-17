import React, { Component } from "react";
import { dishes } from "../global/dishes";
import DishDetail from "./DishDetailComponent";
import Menu from "./MenuComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import { Switch, Route, Redirect } from "react-router-dom";

class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: dishes,
      selectedDish: null,
    };
  }

  render() {
    return (
      <div className="MainComponent">
        {/* 
        <Menu
          dishes={this.state.dishes}
          onClick={(dishId) => {
            this.onDishSelect(dishId);
          }}
        />

        <DishDetail dishDetail={this.selectedDish} /> */}
        <Header/>

        <Switch>
          <Route path="/home" component={Home} />
          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={this.state.dishes} />}
          />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default MainComponent;
