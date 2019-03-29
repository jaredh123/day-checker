import $ from 'jquery';
import DayChecker from './checker';

$(document).ready(function() {
  $("#run").submit(function(event) {
    event.preventDefault();

    let dayChecker = new DayChecker();
    let d = parseInt($("#day").val());
    let m = parseInt($("#month").val());
    let yr = parseInt($("#year").val());
    let yrCount = dayChecker.yrCount(yr);
    let mCount = dayChecker.mCount(m, yr);
    let fullCount = dayChecker.fullCount(d, mCount, yrCount);
    let day = dayChecker.day(d, m, fullCount);

    $("#result").text(day);
  });
});
