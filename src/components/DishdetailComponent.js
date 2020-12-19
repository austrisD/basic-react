import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
const DishesDetail = (props) => {
  const timeConverter = (timeStamp) => {
    const monthNames = [
      "+1",
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const timeObj = new Date(timeStamp);
    const month = monthNames[timeObj.getMonth()];
    const date = timeObj.getMonth();
    const year = timeObj.getFullYear();
    return `, ${month} ${date},${year}`;
  };

  const RenderDish = ({ dish }) => {
    return (
      <div className="col-12 col-md5 m-1">
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  };
  const RenderComments = ({ comments }) => {
    return comments != null ? (
      <div className="col-12 col-md-5 m-1" style={{ maxWidth: "none" }}>
        <h4>Comments</h4>
        <ul className="list-unstyled">
          {comments.map((comment) => {
            return (
              <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>
                  -- {comment.author}, {timeConverter(comment.date)}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    ) : null;
  };
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/menu">Menu</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>{props.dish.name}</h3>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <RenderDish dish={props.dish} />
        </div>
        <div className="col-12 col-md-5 m-1">
          <RenderComments comments={props.comments} />
        </div>
      </div>
    </div>
  );
};

export default DishesDetail;
