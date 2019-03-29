export default class DayChecker {
  constructor(d, m, yr) {
    this.d = d;
    this.m = m;
    this.yr = yr;
  }

  yrCount(yr) {
    let count = 0;
    for (let i = 1; i < yr; i++) {
      if ((i % 4 === 0) && (i % 100 !== 0) || (i % 400 === 0)) {
        count += 366;
      }
      else {
        count += 365;
      }
    }
    return count;
  }

  mCount(m, yr) {
    const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let result = 0;
    for (let i = 0; i < (m - 1); i++) {
      if ((yr % 4 === 0) && (yr % 100 !== 0) || (yr % 400 === 0)) {
        month[1] = 29;
      }
      else {
        month[1] = 28;
      }
      result += month[i];
    }
    return result;
  }

  fullCount(d, mCount, yrCount) {
    if ((((yrCount + mCount + d) % 7) - 1) == (-1)) {
      return 6;
    }
    else {
      return (((yrCount + mCount + d) % 7) - 1);
    }
  };

  day(d, m, fullCount) {
    const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    if (d > month[m - 1] || d <= 0 || m > (month.length) || m <= 0) {
      return "That date doesn't exist!";
    }
    else {
      return `The above date is a ${week[fullCount]}.`;
    }
  }
}
