import { useWindowSize } from "react-use";
import Confetti from "react-confetti";

export default function BirthdayConfetti() {
  const { width, height } = useWindowSize();

  const today = new Date();
  const isBirthday = today.getDate() === 1 && today.getMonth() === 1; // Feb 1

  return isBirthday ? <Confetti width={width} height={height} /> : null;
}
