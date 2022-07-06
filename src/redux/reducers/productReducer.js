import { ActionTypes } from "../constants/action-types";

const initialState = {
    products: [
        {
            id: 1,
            title: "lakshmi",
            catogory: "programmer",
        }
    ],
}
export const productReducer = (state, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:

            return state;

        default:
            return state;
    }
}