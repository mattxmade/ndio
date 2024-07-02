import { secondsToMinutes } from "date-fns";

const formatTime = (timeInSeconds: number) => {
  const mins = secondsToMinutes(timeInSeconds);
  const secs = +(timeInSeconds % 60).toFixed();

  return `${secs === 60 ? mins + 1 : mins}:${
    secs <= 9 ? "0" + secs : secs === 60 ? "00" : secs
  }`;
};

export default formatTime;
