import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Modal,
  ModalBody,
  Col,
  Label,
} from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";

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

  class CommentForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isModalOpen: props.status,
      };
      this.toggleModal = this.toggleModal.bind(this);
      this.handleComment = this.handleComment.bind(this);
    }
    toggleModal() {
      this.setState({
        isModalOpen: !this.state.isModalOpen,
      });
    }
    handleComment(event) {
      this.toggleModal();
      console.log(event);
      alert(
        "Rating: " +
          event.Rating +
          " username: " +
          event.username +
          " Comment: " +
          event.Comment
      );
      // event.preventDefault();
    }
    render() {
      const required = (val) => val && val.length;

      return (
        <>
          <Button outline onClick={this.toggleModal}>
            <span className="fa fa-pencil"></span> Submit Comment
          </Button>
          <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalBody>
              <LocalForm onSubmit={this.handleComment}>
                <Col>
                  <Label for="Rating">Rating</Label>
                  <Control.select
                    model=".Rating"
                    name="Rating"
                    id="Rating"
                    className="form-control"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </Control.select>
                </Col>
                <Col>
                  <Label htmlFor="username">Your Name</Label>
                  <Control.text
                    model=".username"
                    id="username"
                    name="username"
                    className="form-control"
                    validators={{
                      required,
                      minLength: (val) => val && val.length >= 2,
                      maxLength: (val) => !val || val.length <= 15,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".username"
                    show="touched"
                    messages={{
                      required: "Required ",
                      minLength: "Must be more then 2 characters",
                      maxLength: "No more then 15 characters",
                    }}
                  />
                </Col>
                <Col>
                  <Label for="Comment">Comment</Label>
                  <Control.textarea
                    model=".Comment"
                    name="Comment"
                    id="Comment"
                    rows="4"
                    className="form-control"
                    validators={{
                      required,
                      minLength: (val) => val && val.length >= 10,
                      maxLength: (val) => !val || val.length <= 50,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".Comment"
                    show="touched"
                    messages={{
                      required: "Required ",
                      minLength: "Minimum 10 characters",
                      maxLength: "No more then 50 characters",
                    }}
                  />
                </Col>
                <Col>
                  <Button type="submit" color="primary">
                    Submit
                  </Button>
                </Col>
              </LocalForm>
            </ModalBody>
          </Modal>
        </>
      );
    }
  }
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
          <CommentForm />
        </div>
      </div>
    </div>
  );
};

export default DishesDetail;
