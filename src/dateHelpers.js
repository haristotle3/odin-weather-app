import { getDay } from "date-fns";

export function getDayOfTheWeek(datetime) {
  const dateArr = datetime.split("-");

  const year = Number(dateArr[0]);
  const month = Number(dateArr[1]);
  const day = Number(dateArr[2]);

  const dayMapper = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return dayMapper[getDay(new Date(year, month - 1, day))];
}

export function getToday() {
  const today = new Date();

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const todaysDate = today.getDate();
  const todaysDayOfTheWeek = days[today.getDay()];
  const todaysMonth = months[today.getMonth()];
  return todaysDayOfTheWeek + ", " + todaysDate + " " + todaysMonth;
}
