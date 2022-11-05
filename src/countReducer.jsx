import {
  INC_COUNT,
  DEC_COUNT,
  RESET_COUNT,
  ADD_VALUE,
  REDUCE_VALUE,
} from "./types";

export const initialState = {
  number: 0,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case INC_COUNT:
      return {
        ...state,
        number: state.number + 1,
      };

    case DEC_COUNT:
      return {
        ...state,
        number: state.number - 1,
      };
    case RESET_COUNT:
      return {
        number: 0,
      };
    case ADD_VALUE:
      return {
        ...state,
        number: state.number + action.payload,
      };
    case REDUCE_VALUE:
      return {
        ...state,
        number: state.number - action.payload,
      };
  }
};
