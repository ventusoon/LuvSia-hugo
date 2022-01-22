
function siteTime() {
    var seconds = 1000;
    var minutes = seconds * 60;
    var hours = minutes * 60;
    var days = hours * 24;
    var years = days * 365;
    var today = new Date();
    var startYear = 2021;
    var startMonth = 12;
    var startDate = 31;
    var startHour = 00;
    var startMinute = 00;
    var startSecond = 00;
    var todayYear = today.getFullYear();
    var todayMonth = today.getMonth() + 1;
    var todayDate = today.getDate();
    var todayHour = today.getHours();
    var todayMinute = today.getMinutes();
    var todaySecond = today.getSeconds();
    var t1 = Date.UTC(startYear, startMonth, startDate, startHour, startMinute, startSecond);
    var t2 = Date.UTC(todayYear, todayMonth, todayDate, todayHour, todayMinute, todaySecond);
    var diff = t2 - t1;
    var diffYears = Math.floor(diff / years);
    var diffDays = Math.floor((diff / days) - diffYears * 365);
    var diffHours = Math.floor((diff - (diffYears * 365 + diffDays) * days) / hours);
    var diffMinutes = Math.floor((diff - (diffYears * 365 + diffDays) * days - diffHours * hours) /
                minutes);
    var diffSeconds = Math.floor((diff - (diffYears * 365 + diffDays) * days - diffHours * hours -
                diffMinutes * minutes) / seconds);
    if (startYear == todayYear) {
        //document.getElementById("year").innerHTML = todayYear;
        document.getElementById("sitetime").innerHTML = " Running  " + diffDays + " d " + diffHours +
            " h " + diffMinutes + " m " + diffSeconds + " s";
    } else {
        //document.getElementById("year").innerHTML = startYear + " - " + todayYear;
        document.getElementById("sitetime").innerHTML = " Running  " + diffYears + " y " + diffDays +
            " d " + diffHours + " h " + diffMinutes + " m " + diffSeconds + " s";
    }
}
setInterval(siteTime, 1000);