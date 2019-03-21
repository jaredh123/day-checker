// export class Date {
//   constructor(d, m, yr) {
//     this.d = d;
//     this.m = m;
//     this.yr = yr;
//   }
// }
//
// var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
// var week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
//
//
//
// var yrCount = (((yr - 1) % 4) * 365) + (parseInt((yr - 1) / 4) * 366);
//
// var yrCount = function() {
//   var count = 0;
//   for (i = 1; i < yr; i++) {
//     if ((i % 4 === 0) && (i % 100 !== 0) || (i % 400 === 0)) {
//       count += 366;
//     }
//     else {
//       count += 365;
//     }
//   }
//   return count;
// }
//
// var mCount = function() {
//   var result = 0;
//   for (i = 0; i < (m - 1); i++) {
//     if ((yr % 4 === 0) && (yr % 100 !== 0) || (yr % 400 === 0)) {
//       month[1] = 29;
//     }
//     else {
//       month[1] = 28;
//     }
//     result += month[i];
//   }
//   return result;
// }
//
// var fullCount = function() {
//   if ((((yrCount() + mCount() + d) % 7) - 1) == (-1)) {
//     return 6;
//   }
//   else {
//     return (((yrCount() + mCount() + d) % 7) - 1);
//   }
// };
//
// var day = function() {
//   if (d > month[m - 1] || m > (month.length)) {
//     return "That date doesn't exist!";
//   }
//   else {
//     return week[fullCount()];
//   }
// }
//
// $("#result").text("The above date is a " + day() + ".");
