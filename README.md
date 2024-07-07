# jstimes

> A lightweight and efficient npm package providing essential time functions for JavaScript, empowering developers with versatile tools for handling time-related operations with ease.

## Getting Started

To install the package, run the following command in your project directory:

```sh
$ npm i jstimes
```

or if you use Yarn:

```sh
$ yarn add jstimes
```

## Functions

#### sleep :

> Delay a promise a specified amount of milliseconds

```js
import { sleep } from "jstimes";

console.log("start");

await sleep(3000); // should be placed in an async function

// Executed 3 seconds later
console.log("end");
```

#### isLeapYear :

> Check if a year is a [leap year](https://en.wikipedia.org/wiki/Leap_year)

```js
import { isLeapYear } from "jstimes";

console.log(isLeapYear("2024")); // true
```

#### isWeekend :

> Checks if a given date falls on a weekend.

```js
import { isWeekend } from "jstimes";

console.log(isWeekend(new Date("2024/07/07"))); // true
```

#### getDaysBetweenTwoDate :

> returns the count of days between two dates

```js
import { getDaysBetweenTwoDate } from "jstimes";

console.log(getDaysBetweenTwoDate("2024-01-02", "2024-01-08")); // 7
```

#### formatDuration :

> Formats a duration (given in milliseconds) into a readable string (e.g., "1h 30m 45s").

```js
import { formatDuration } from "jstimes";

console.log(formatDuration(108020000)); // "30h 0m 20s"
```

#### formatDate :

> Formats a Date object into a readable string format.

```js
import { formatDate } from "jstimes";

console.log(formatDate(new Date("2024/07/25"), "MM-DD at HH:mm")); // "07-25 at 00:00"
```

#### addDays :

> Adds a specified number of days to a date.

```js
import { addDays, formatDate } from "jstimes";

console.log(formatDate(addDays(new Date("2024/11/28"), 10), "YYYY-MM-DD")); // "2024-12-08"
```

#### subtractDays :

> Subtracts a specified number of days from a date.

```js
import { subtractDays, formatDate } from "jstimes";

console.log(formatDate(subtractDays(new Date("2024/11/28"), 40), "YYYY-MM-DD")); // 2024-10-19
```

#### addMonths :

> Adds a specified number of months to a date.

```js
import { addMonths, formatDate } from "jstimes";

console.log(formatDate(addMonths(new Date("2024/11/28"), 10), "YYYY-MM-DD")); // "2025-09-28"
```

#### subtractMonths :

> Subtracts a specified number of months from a date.

```js
import { subtractMonths, formatDate } from "jstimes";

console.log(
  formatDate(subtractMonths(new Date("2024/11/28"), 4), "YYYY-MM-DD")
); // "2024-07-28"
```

#### addHours :

> Adds a specified number of hours to a date.

```js
import { addHours, formatDate } from "jstimes";

console.log(
  formatDate(
    addHours(new Date("2024/11/28 08:10:05"), 10),
    "YYYY-MM-DD HH:mm:ss"
  )
); // "2024-11-28 18:10:05"
```

#### subtractHours :

> Subtracts a specified number of hours from a date.

```js
import { subtractHours, formatDate } from "jstimes";

console.log(
  formatDate(
    subtractHours(new Date("2024/11/28 23:10:05"), 10),
    "YYYY-MM-DD HH:mm:ss"
  )
); // "2024-11-28 13:10:05"
```

#### getWeekOfYear :

> Returns the ISO week number for a given date.

```js
import { getWeekOfYear } from "jstimes";

console.log(getWeekOfYear(new Date("2024/02/02"))); // 5
```

#### getDayOfYear :

> Returns the day number of the year for a given date.

```js
import { getDayOfYear } from "jstimes";

console.log(getDayOfYear(new Date("2024/02/28"))); // 59
```

## Variables

#### weekDays :

```js
weekDays = [
  { id: 0, label: "Monday", value: 0 },
  { id: 1, label: "Tuesday", value: 1 },
  ...,
  { id: 5, label: "Saturday", value: 5 },
  { id: 6, label: "Sunday", value: 6 },
];
```

#### Months :

```js
Months = [
  { id: 0, label: "January", value: 0, shortLabel: "Jan" },
  { id: 1, label: "February", value: 1, shortLabel: "Feb" },
  ...,
  { id: 10, label: "November", value: 10, shortLabel: "Nov" },
  { id: 11, label: "December", value: 11, shortLabel: "Dec" },
];
```

## Contributing

1.  Fork it!
2.  Create your feature branch: `git checkout -b my-new-feature`
3.  Add your changes: `git add .`
4.  Commit your changes: `git commit -m 'Add some feature'`
5.  Push to the branch: `git push origin my-new-feature`
6.  Submit a pull request!

## Authors

- **Tofigh Nazari**
