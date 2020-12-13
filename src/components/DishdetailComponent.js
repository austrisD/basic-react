import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

let DishesDetail = (props) => {
  const src = props.dishDetail;

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
