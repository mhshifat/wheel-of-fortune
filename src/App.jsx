import { useEffect, useRef } from "react";
import button from "./assets/button.png";
import marker from "./assets/marker.png";
import wheel from "./assets/wheel.png";

const zoneSize = 45;
const symbolZone = {
  1: "Frog",
  2: "Snail",
  3: "Dolphin",
  4: "Ladybug",
  5: "Koala",
  6: "Unicorn",
  7: "Dragon",
  8: "Snowman"
}

export default function App() {
  const wheelRef = useRef(null);

  useEffect(() => {
    wheelRef.current?.addEventListener("transitionend", (e) => {
      wheelRef.current.style.transition = "none";
      const deg = e.target.dataset.deg;
      const actualDeg = deg % 360;
      wheelRef.current.style.transform = `rotate(${actualDeg}deg)`;
      const winSymNo = Math.ceil(actualDeg / zoneSize);
      if (winSymNo) {
        const winSym = symbolZone[winSymNo];
        alert(`The wining wheel symbol is ${winSym}`);
      }
    })
  }, []);

  return (
    <div className="container">
      <img src={marker} alt="" />
      <img src={wheel} alt="" ref={wheelRef} />
      <img src={button} onClick={() => {
        const deg = Math.floor(5000 + Math.random() * 5000);
        if (wheelRef.current) {
          wheelRef.current.dataset.deg = deg;
          wheelRef.current.style.transition = "all 10s ease-out";
          wheelRef.current.style.transform = `rotate(${deg}deg)`;
        }
      }} alt="" />
    </div>
  )
}