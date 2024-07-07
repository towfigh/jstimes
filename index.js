export const Months = [
  { id: 0, label: "January", value: 0, shortLabel: "Jan" },
  { id: 1, label: "February", value: 1, shortLabel: "Feb" },
  { id: 2, label: "March", value: 2, shortLabel: "Mar" },
  { id: 3, label: "April", value: 3, shortLabel: "Apr" },
  { id: 4, label: "May", value: 4, shortLabel: "May" },
  { id: 5, label: "June", value: 5, shortLabel: "Jun" },
  { id: 6, label: "July", value: 6, shortLabel: "Jul" },
  { id: 7, label: "August", value: 7, shortLabel: "Aug" },
  { id: 8, label: "September", value: 8, shortLabel: "Sep" },
  { id: 9, label: "October", value: 9, shortLabel: "Oct" },
  { id: 10, label: "November", value: 10, shortLabel: "Nov" },
  { id: 11, label: "December", value: 11, shortLabel: "Dec" },
];

export const weekDays = [
  { id: 0, label: "Monday", value: 0 },
  { id: 1, label: "Tuesday", value: 1 },
  { id: 2, label: "Wednesday", value: 2 },
  { id: 3, label: "Thursday", value: 3 },
  { id: 4, label: "Friday", value: 4 },
  { id: 5, label: "Saturday", value: 5 },
  { id: 6, label: "Sunday", value: 6 },
];

export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export const isLeapYear = (year) => {
  const numbYear = Number(year);
  if ((0 === numbYear % 4 && 0 !== numbYear % 100) || 0 === numbYear % 400) {
    return true;
  } else {
    return false;
  }
};

export const isWeekend = (date) => {
  const day = date.getDay();
  return day === 0 || day === 6;
};

export const getDaysBetweenTwoDate = (d1, d2) => {
  const endDate = new Date(d2);
  let daysCount = 0;
  let startDate = new Date(d1);
  while (startDate <= endDate) {
    daysCount++;
    startDate.setDate(startDate.getDate() + 1);
  }
  return daysCount;
};

export const formatDuration = (ms) => {
  const seconds = Math.floor(ms / 1000) % 60;
  const minutes = Math.floor(ms / (1000 * 60)) % 60;
  const hours = Math.floor(ms / (1000 * 60 * 60));
  return `${hours}h ${minutes}m ${seconds}s`;
};

export const formatDate = (date, format) => {
  const map = {
    MM:
      date.getMonth() + 1 < 10
        ? `0${date.getMonth() + 1}`
        : date.getMonth() + 1,
    DD: date.getDate() < 10 ? `0${date.getDate()}` : date.getDate(),
    YYYY: date.getFullYear(),
    HH: date.getHours() < 10 ? `0${date.getHours()}` : date.getHours(),
    mm: date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes(),
    ss: date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds(),
  };

  return format.replace(/MM|DD|YYYY|HH|mm|ss/gi, (matched) => map[matched]);
};

export const addDays = (date, days) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

export const subtractDays = (date, days) => {
  const result = new Date(date);
  result.setDate(result.getDate() - days);
  return result;
};

export const addMonths = (date, months) => {
  const result = new Date(date);
  result.setMonth(result.getMonth() + months);
  return result;
};

export const subtractMonths = (date, months) => {
  const result = new Date(date);
  result.setMonth(result.getMonth() - months);
  return result;
};

export const addHours = (date, hours) => {
  const result = new Date(date);
  result.setHours(result.getHours() + hours);
  return result;
};

export const subtractHours = (date, hours) => {
  const result = new Date(date);
  result.setHours(result.getHours() - hours);
  return result;
};

export const getWeekOfYear = (date) => {
  const startOfYear = new Date(date.getFullYear(), 0, 1);
  const pastDaysOfYear = (date - startOfYear) / 86400000;
  return Math.ceil((pastDaysOfYear + startOfYear.getDay() + 1) / 7);
};

export const getDayOfYear = (date) => {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff =
    date -
    start +
    (start.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000;
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
};
