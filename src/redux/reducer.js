import { DISHES } from "../global/dishes";
import { COMMENTS } from "../global/comments";
import { PROMOTIONS } from "../global/promotions";
import { LEADERS } from "../global/leaders";

export const initialState = {
  dishes: DISHES,
  comments: COMMENTS,
  promotions: PROMOTIONS,
  leaders: LEADERS,
};

export const Reducer = (state = initialState, action) => {
  return state;
};
