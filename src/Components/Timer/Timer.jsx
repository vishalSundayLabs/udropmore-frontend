import Countdown from "react-countdown";
import moment from "moment"
const Timer = (props) => {
    const inter = new Date().getTime() + props.interval
    return (
      <>
        <Countdown
          date={new Date(inter)}
          intervalDelay={1000}
          precision={3}
          zeroPadTime={1}
          renderer={(props) => (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.3rem",
                width: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  color: "#fff",
                  justifyContent: "space-between",
                  gap: "0.6rem",
                  width: "120%",
                  fontFamily: "BRAVE Eightyone",
                  fontSize: "45px",
                  fontWeight: 530,
                  // lineHeight: "70px",
                  // letterSpacing: "0.16em",
                  textAlign: "right",
                }}
              >
                
                <div
                  style={{
                    padding: "0.8rem 0rem",
                    background: "#5E6267",
                    borderRadius: "7px",
                    flex: 1,
                    textAlign: "center",
                  }}
                >
                  {props.days}{" "}
                  <svg
                      className="timeCut-day"
                      width="70px"
                      height="13"
                      viewBox="0 0 128 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="6.22857"
                        cy="6.38568"
                        r="6.22857"
                        fill="#161616"
                      />
                      <circle
                        cx="121.457"
                        cy="6.38568"
                        r="6.22857"
                        fill="#161616"
                      />
                      <rect
                        x="9.34277"
                        y="4.82855"
                        width="109"
                        height="3.11429"
                        fill="#161616"
                      />
                    </svg>
                </div>
                <div
                  style={{
                    padding: "0.8rem 0rem",
                    background: "#5E6267",
                    borderRadius: "7px",
                    flex: 1,
                    textAlign: "center",
                  }}
                >
                  {props.hours}
                  <svg
                      className="timeCut-hrs"
                      width="72px"
                      height="13"
                      viewBox="0 0 128 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="6.22857"
                        cy="6.38568"
                        r="6.22857"
                        fill="#161616"
                      />
                      <circle
                        cx="121.457"
                        cy="6.38568"
                        r="6.22857"
                        fill="#161616"
                      />
                      <rect
                        x="9.34277"
                        y="4.82855"
                        width="109"
                        height="3.11429"
                        fill="#161616"
                      />
                    </svg>
                </div>
                <div
                  style={{
                    padding: "0.8rem 0rem",
                    background: "#5E6267",
                    borderRadius: "7px",
                    flex: 1,
                    textAlign: "center",
                  }}
                >
                  {props.minutes}{" "}
                  <svg
                      className="timeCut-mins"
                      width="72px"
                      height="13"
                      viewBox="0 0 128 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="6.22857"
                        cy="6.38568"
                        r="6.22857"
                        fill="#161616"
                      />
                      <circle
                        cx="121.457"
                        cy="6.38568"
                        r="6.22857"
                        fill="#161616"
                      />
                      <rect
                        x="9.34277"
                        y="4.82855"
                        width="109"
                        height="3.11429"
                        fill="#161616"
                      />
                    </svg>
                </div>
                <div
                  style={{
                    padding: "0.8rem 0rem",
                    background: "#5E6267",
                    borderRadius: "7px",
                    flex: 1,
                    textAlign: "center",
                  }}
                >
                  {props.seconds}{" "}
                    <svg
                      className="timeCut-secs"
                      width="74px"
                      height="13"
                      viewBox="0 0 128 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="6.22857"
                        cy="6.38568"
                        r="6.22857"
                        fill="#161616"
                      />
                      <circle
                        cx="121.457"
                        cy="6.38568"
                        r="6.22857"
                        fill="#161616"
                      />
                      <rect
                        x="9.34277"
                        y="4.82855"
                        width="109"
                        height="3.11429"
                        fill="#161616"
                      />
                    </svg>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  color: "#000",
                  justifyContent: "space-between",
                  gap: "0.5rem",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    padding: "0.8rem 0rem",
                    flex: 1,
                    textAlign: "center",
                    fontFamily: "Share Tech",
                    fontSize: "18px",
                    fontWeight: 500,
                    lineHeight: "20px",
                    letterSpacing: "0em",
                    textAlign: "center",
                  }}
                >
                  days{" "}
                </div>
                <div
                  style={{
                    padding: "0.8rem 0rem",
                    flex: 1,
                    textAlign: "center",
                    fontFamily: "Share Tech",
                    fontSize: "18px",
                    fontWeight: 400,
                    lineHeight: "20px",
                    letterSpacing: "0em",
                    textAlign: "center",
                  }}
                >
                  hrs
                </div>
                <div
                  style={{
                    padding: "0.8rem 0rem",
                    flex: 1,
                    textAlign: "center",
                    fontFamily: "Share Tech",
                    fontSize: "18px",
                    fontWeight: 400,
                    lineHeight: "20px",
                    letterSpacing: "0em",
                    textAlign: "center",
                  }}
                >
                  mins{" "}
                </div>
                <div
                  style={{
                    padding: "0.8rem 0rem",
                    flex: 1,
                    textAlign: "center",
                    fontFamily: "Share Tech",
                    fontSize: "18px",
                    fontWeight: 400,
                    lineHeight: "20px",
                    letterSpacing: "0em",
                    textAlign: "center",
                  }}
                >
                  secs{" "}
                </div>
              </div>
            </div>
          )}
        />
      </>
    );
  };

  export default Timer