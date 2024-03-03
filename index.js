function sleep(ms) {
  new Promise((r) => setTimeout(r, ms));
}
module.exports = sleep;

export const Months = [
  { id: 0, label: "January", value: 0 },
  { id: 1, label: "February", value: 1 },
  { id: 2, label: "March", value: 2 },
  { id: 3, label: "April", value: 3 },
  { id: 4, label: "May", value: 4 },
  { id: 5, label: "June", value: 5 },
  { id: 6, label: "July", value: 6 },
  { id: 7, label: "August", value: 7 },
  { id: 8, label: "September", value: 8 },
  { id: 9, label: "October", value: 9 },
  { id: 10, label: "November", value: 10 },
  { id: 11, label: "December", value: 11 },
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
