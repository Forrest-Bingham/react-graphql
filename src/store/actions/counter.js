import axios from "axios";

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const increment = () => {
  return {
    type: INCREMENT,
    payload: 1
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
    payload: 1
  };
};

// export const decrement = () => dispatch => {
//   dispatch({ type: "START" });
//   axios.post("http://localhost:4000/", {
//     // query {
//     //   hello
//     // },
//   });
// };
