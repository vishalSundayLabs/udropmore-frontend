import React, { useRef, useEffect, useState } from "react";
import Tick from "@pqina/flip";
import "@pqina/flip/dist/flip.min.css";

export const FlipDate = ({ value }) => {
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
        const offset = new Date();
        const timeDuration = Tick.helper.duration(24, "hours");

        // add 24 hours to get final deadline
        const deadline = new Date(
            offset.setMilliseconds(offset.getMilliseconds() + timeDuration)
        );

        const counter = Tick.count.down(deadline, {
            format: ["h", "m", "s"],
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
