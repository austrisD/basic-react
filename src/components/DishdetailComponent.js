import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

let DishesDetail = (props) => {
  const src = props.dishDetail;

  const timeConverter = (time) => {
    const monthNames = [
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
    const year = time.slice(0, time.search("-"));
    const month =
      monthNames[time.slice(time.indexOf("-") + 1, time.lastIndexOf("-"))-1];
    const date = time.slice(time.lastIndexOf("-")+1, time.indexOf("T"))
    return `, ${month} ${date},${year}`;
  };

  return (
    <>
      <div key={src.id} className="col-12 col-md-5 m-1">
        <Card>
          <CardImg top src={src.image} alt={src.name} />
          <CardBody>
            <CardTitle>{src.name}</CardTitle>
            <CardText>{src.description}</CardText>
          </CardBody>
        </Card>
      </div>

      <div className="col-12 col-md-5 m-1">
        <Card>
          <CardBody>
            <CardTitle>Comments</CardTitle>
            {src.comments.map((value) => {
              return (
                <div key={value.id}>
                  <CardText>{value.comment}</CardText>
                  <CardText>
                    --{value.author}
                    {timeConverter(value.date)}
                  </CardText>
                </div>
              );
            })}
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default DishesDetail;
