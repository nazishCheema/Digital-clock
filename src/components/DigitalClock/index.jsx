import { useEffect } from "react";
import { useState } from "react";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [textColor, setTextColor] = useState("#000000");

  const changeColor = () => {
    const randomBackgroundColor =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
    const randomTextColor =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
    setBackgroundColor(randomBackgroundColor);
    setTextColor(randomTextColor);
  };

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    const colorTimer = setInterval(changeColor, 10000);

    return () => {
      clearInterval(timer);
      clearInterval(colorTimer);
    };
  }, []);

  return (
    <div
      style={{
        height: `100vh`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        backgroundColor: backgroundColor,
        color: textColor,
      }}
    >
      <h1 style={{ fontSize: `64px` }}> {time.toLocaleTimeString()}</h1>
    </div>
  );
};

export default DigitalClock;
