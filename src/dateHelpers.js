import { getDay } from "date-fns";

export default function getDayOfTheWeek(datetime) {
  const dateArr = datetime.split("-");

  const year = Number(dateArr[0]);
  const month = Number(dateArr[1]);
  const day = Number(dateArr[2]);

  const dayMapper = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return dayMapper[getDay(new Date(year, month - 1, day))];
}
