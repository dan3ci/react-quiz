import { useEffect } from "react";

export default function Timer({ secondsRemaining, dispatch }) {
  useEffect(
    function () {
      const id = setInterval(function () {
        //   console.log("tick");
        dispatch({ type: "tick" });
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch]
  );

  const minutes = Math.ceil(secondsRemaining / 60);
  const seconds = Math.ceil(secondsRemaining % 60);
  return (
    <div className="timer">
      {minutes < 10 ? "0" : ""}
      {minutes}:{seconds < 10 ? "0" : ""}
      {seconds}
    </div>
  );
}
