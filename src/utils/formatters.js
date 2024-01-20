export function time24HToAmPm(time) {
  if (time === 0) return "12 am";
  if (time === 12) return "12 pm";

  if (time / 12 < 1) {
    return time + " am";
  } else {
    return (time % 12) + " pm";
  }
}
