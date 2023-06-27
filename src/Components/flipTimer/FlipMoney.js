import React, { useRef, useEffect, useState } from "react";
import Tick from "@pqina/flip";
import "@pqina/flip/dist/flip.min.css";

export const FlipMoney = ({ value }) => {
  const divRef = useRef();
  const tickRef = useRef();
  const [tickValue, setTickValue] = useState(value);

  useEffect(() => {
    const didInit = (tick) => {
      tickRef.current = tick;
    };

    const currDiv = divRef.current;
    const tickValue = tickRef.current;
    Tick.DOM.create(currDiv, {
      value,
      didInit,
    });

    return () => Tick.DOM.destroy(tickValue);
  }, [value]);

  useEffect(() => {
    const counter = Tick.count.up({
      from: 0,
      to: parseFloat(value),
      format: {
        prefix: "₹",
        decimals: 2,
      },
    });

    // When the counter updates, update React's state value
    counter.onupdate = function (value) {
      setTickValue(value);
    };

    return () => {
      counter.timer.stop();
    };
  }, [value]);

  useEffect(() => {
    if (tickRef.current) {
      tickRef.current.value = tickValue;
    }
  }, [tickValue]);

  return (
    <div ref={divRef} className="tick">
      <div data-repeat="true">
        <span data-view="flip" />
      </div>
    </div>
  );
};
