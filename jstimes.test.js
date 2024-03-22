const { isLeapYear, getDaysBetweenTwoDate } = require("./index");

test("checkIsLeapYear", () => {
  expect(isLeapYear("2024")).toBe(true);
});

test("getDaysBetweenTwoDate", () => {
  expect(getDaysBetweenTwoDate("2024-01-02", "2024-01-08")).toBe(7);
});
