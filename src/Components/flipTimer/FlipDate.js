import React, { useRef, useEffect, useState } from "react";
import Tick from "@pqina/flip";
import "@pqina/flip/dist/flip.min.css";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import "./FlipDate.css";

export const FlipDate = (props) => {

  return (
    <FlipClockCountdown
      to={new Date(props.value)}
      labels={["Days", "Hrs", "Mins", "Secs"]}
      labelStyle={{ fontSize: 8, fontWeight: 300 }}
      digitBlockStyle={{
        width: props.width ? props.width : 10,
        height: props.height ? props.height : 15,
        fontSize: props.fontSize ? props.fontSize : 13,
      }}
      dividerStyle={{ color: "grey", height: 1 }}
      separatorStyle={{ color: "white", size: "2px" }}
      renderMap={[true, true, true, true]}
    ></FlipClockCountdown>
  );
};
