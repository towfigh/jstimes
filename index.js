export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

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

export const isLeapYear = (year) => {
  const numbYear = Number(year);
  if ((0 === numbYear % 4 && 0 !== numbYear % 100) || 0 === numbYear % 400) {
    return true;
  } else {
    return false;
  }
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
