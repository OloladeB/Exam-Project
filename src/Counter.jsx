import React from "react";
import { useReducer, useState } from "react";
import { reducer, initialState } from "./countReducer";
import {Display} from './Display';

import {
  INC_COUNT,
  DEC_COUNT,
  RESET_COUNT,
  ADD_VALUE,
  REDUCE_VALUE,
} from "./types";
import "./counter.css";

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState(+0);
  const data = (e) => {
    setInput(+e.target.value);
  };
  if (input >= 10000) {
    throw new Error("value exceeds required..");
  }
  return (
    <div className="App">
      <div className="container">
        <div className="count-bar">
          <label htmlFor="" className="count-bar-lebel">
            Total
          </label>
          <p><Display counter = {state.number}/></p>
        </div>
        <div className="count-text">
          <label htmlFor="" className="input-label">
            Add any number
          </label>
          <input
            type="number"
            onChange={data}
            className="count-input"
            placeholder="enter any number"
            value={input}
          />
        </div>

        <div className="values">
          <button
            onClick={() => {
              dispatch({ type: ADD_VALUE, payload: input });
              setInput(0);
            }}
          >
            Add any number
          </button>
          <button
            onClick={() => {
              dispatch({ type: REDUCE_VALUE, payload: input });
              setInput(0);
            }}
          >
            Remove any number
          </button>
        </div>

        <div className="values">
          <button onClick={() => dispatch({ type: INC_COUNT })}>
            add (+1){" "}
          </button>
          <button onClick={() => dispatch({ type: DEC_COUNT })}>
            reduce (-1)
          </button>
        </div>
        <div className="reset">
          <button onClick={() => dispatch({ type: RESET_COUNT })}>
            reset (0){" "}
          </button>
        </div>
      </div>
        <p className="warning">Numbers greater than 10000 throws an error</p>
    </div>
  );
};

export default Counter;
