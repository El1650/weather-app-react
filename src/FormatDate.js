export default function FormatDate() {
  let d = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let now = new Date();
  let hr = now.getHours();
  if (hr < 10) {
    hr = `0${hr}`;
  }
  let min = now.getMinutes();
  if (min < 10) {
    min = `0${min}`;
  }

  let dt = d[now.getDay()];
  return `${dt} ${hr}:${min}`;
}
