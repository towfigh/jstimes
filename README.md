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

#### getDaysBetweenTwoDate :

> returns the count of days between two dates

```js
import { getDaysBetweenTwoDate } from "jstimes";

console.log(getDaysBetweenTwoDate("2024-01-02", "2024-01-08")); // 7
```

## Variables

#### weekDays :

```js
weekDays = [
  { id: 0, label: "Monday", value: 0 },
  { id: 1, label: "Tuesday", value: 1 },
  { id: 2, label: "Wednesday", value: 2 },
  { id: 3, label: "Thursday", value: 3 },
  { id: 4, label: "Friday", value: 4 },
  { id: 5, label: "Saturday", value: 5 },
  { id: 6, label: "Sunday", value: 6 },
];
```

#### Months :

```js
Months = [
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
