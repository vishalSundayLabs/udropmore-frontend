import React, { useEffect } from "react";
import ReactPolling from "react-polling";

const AuctionPolling = ({ url, interval, retryCount, setStates, states }) => {

  return (
    <>
      <ReactPolling
        url={url}
        interval={interval}
        onSuccess={(res) => {
          setStates(res.result);
          return true;
        }}
        onFailure={() => console.log("handle failure")}
        method={"GET"}
        body={JSON.stringify()}
        render={({ startPolling, stopPolling, isPolling }) => {
          if (isPolling) {
            return <div> Hello I am polling</div>;
          } else {
            return <div> Hello I stopped polling</div>;
          }
        }}
      />
    </>
  );
};

export default AuctionPolling;
