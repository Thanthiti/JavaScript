function parseDate(dateString) {
    const months = {
        "January": 1, "February": 2, "March": 3, "April": 4, "May": 5, "June": 6, "July": 7,
        "August": 8, "September": 9, "October": 10, "November": 11, "December": 12
    };
    const [day, month, year, time] = dateString.split(" ");
    const yearInAD = parseInt(year)
    const monthNumber = months[month];
    const [hours, minutes, seconds] = time.split(":");

    return new Date(yearInAD, monthNumber - 1, parseInt(day),
     parseInt(hours), parseInt(minutes), parseInt(seconds));
}

function calculateTimeDifference(startDate, endDate) {
    const timeDifference = endDate - startDate;
    const totalSeconds = timeDifference / 1000;
    const totalHours = Math.floor(totalSeconds / 3600);
    const totalMinutes = Math.floor((totalSeconds % 3600) / 60);
    const remainingSeconds = Math.floor(totalSeconds % 60); // คำนวณวินาทีที่เหลือ
    // คำนวณปี, วัน, ชั่วโมง, นาที, วินาที
    const days = totalHours / 24;
    const years = Math.floor(days / 365.25); // คำนึงถึงปีอธิกสุรทิน
    const remainingDays = days - (years * 365.25);
    const remainingHours = (remainingDays - Math.floor(remainingDays)) * 24;
    const remainingMinutes = (remainingHours - Math.floor(remainingHours)) * 60;
    return {
        years: years,
        days: Math.floor(remainingDays),
        hours: Math.floor(remainingHours),
        minutes: Math.floor(remainingMinutes),
        seconds: remainingSeconds,
        totalHours: totalHours,
        totalMinutes: totalMinutes
    };
}

const startDateString = '1 March 2563 9:9:12'; // วันที่เริ่มต้น
const endDateString = '1 May 2563 18:45:30';   // วันที่สิ้นสุด

const startDate = parseDate(startDateString);
const endDate = parseDate(endDateString);
const timeDifference = calculateTimeDifference(startDate, endDate);

console.log(`Time difference:`);
console.log(`Years: ${timeDifference.years}`);
console.log(`Days: ${timeDifference.days}`);
console.log(`Hours: ${timeDifference.totalHours}`);
console.log(`Minutes: ${timeDifference.totalMinutes}`);
console.log(`Seconds: ${timeDifference.seconds}`);