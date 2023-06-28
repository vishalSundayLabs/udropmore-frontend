import React, { useRef, useEffect, useState } from "react";
import Tick from "@pqina/flip";
import "@pqina/flip/dist/flip.min.css";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import "./FlipDate.css";

export const FlipDate = ({ value }) => {
  return (
    <FlipClockCountdown
      to={new Date(value)}
      labels={["Days", "Hrs", "Mins", "Secs"]}
      labelStyle={{ fontSize: 8, fontWeight: 300 }}
      digitBlockStyle={{ width: 10, height: 15, fontSize: 13 }}
      dividerStyle={{ color: "grey", height: 1 }}
      separatorStyle={{ color: "white", size: "2px" }}
      renderMap={[true, true, true, true]}
    >
    </FlipClockCountdown>
  );
};
