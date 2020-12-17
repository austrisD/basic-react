import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
// import DishesDetail from "./DishDetailComponent";

// class Menu extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       selectedDish: null,
//     };
//   }

//   onDishSelect(dish) {
//     this.setState({ selectedDish: dish });
//   }

//   renderDish(dish) {
//     return dish != null ? <DishesDetail dishDetail={dish} /> : "";
//   }

//   render() {
    


//   }
// }

function Menu(props) {
  const menu = props.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1">
          <Card onClick={() => {}}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });
      return (
      <div className="container">
        <div className="row">{menu}</div>
        {/* <div className="row">{renderDish(state.selectedDish)}</div> */}
      </div>
    );
  
}

export default Menu;
