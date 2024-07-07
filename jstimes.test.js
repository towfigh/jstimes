const {
  isLeapYear,
  isWeekend,
  getDaysBetweenTwoDate,
  formatDate,
  addDays,
  getDayOfYear,
  addMonths,
  formatDuration,
  getWeekOfYear,
  subtractDays,
  addHours,
  subtractHours,
  subtractMonths,
} = require("./index");

test("isLeapYear", () => {
  expect(isLeapYear("2024")).toBe(true);
});

test("isWeekend", () => {
  expect(isWeekend(new Date("2024/07/07"))).toBe(true);
});

test("getDaysBetweenTwoDate", () => {
  expect(getDaysBetweenTwoDate("2024-01-02", "2024-01-08")).toBe(7);
});

test("formatDuration", () => {
  expect(formatDuration(108020000)).toBe("30h 0m 20s");
});

test("formatDate", () => {
  expect(formatDate(new Date("2024/07/25"), "MM-DD at HH:mm")).toBe(
    "07-25 at 00:00"
  );
});

test("addDays", () => {
  expect(formatDate(addDays(new Date("2024/11/28"), 10), "YYYY-MM-DD")).toBe(
    "2024-12-08"
  );
});

test("subtractDays", () => {
  expect(
    formatDate(subtractDays(new Date("2024/11/28"), 40), "YYYY-MM-DD")
  ).toBe("2024-10-19");
});

test("addMonths", () => {
  expect(formatDate(addMonths(new Date("2024/11/28"), 10), "YYYY-MM-DD")).toBe(
    "2025-09-28"
  );
});

test("subtractMonths", () => {
  expect(
    formatDate(subtractMonths(new Date("2024/11/28"), 4), "YYYY-MM-DD")
  ).toBe("2024-07-28");
});

test("addHours", () => {
  expect(
    formatDate(
      addHours(new Date("2024/11/28 08:10:05"), 10),
      "YYYY-MM-DD HH:mm:ss"
    )
  ).toBe("2024-11-28 18:10:05");
});

test("subtractHours", () => {
  expect(
    formatDate(
      subtractHours(new Date("2024/11/28 23:10:05"), 10),
      "YYYY-MM-DD HH:mm:ss"
    )
  ).toBe("2024-11-28 13:10:05");
});

test("getWeekOfYear", () => {
  expect(getWeekOfYear(new Date("2024/02/02"))).toBe(5);
});

test("getDayOfYear", () => {
  expect(getDayOfYear(new Date("2024/02/28"))).toBe(59);
});
