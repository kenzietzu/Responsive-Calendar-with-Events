const monthTag = document.querySelector(".this-month")
const dayTag = document.querySelector(".day")

let today = new Date();
let currMonth = today.getMonth();
let currYear = today.getFullYear();
let thisMon = new Date();
let lastSun = new Date();
let nextMon = new Date();
let activeDay;

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

function getMonday() {
    const first = today.getDate() - today.getDay() + 1;
    thisMon = new Date(today.setDate(first));

    const last = today.getDate() - today.getDay();
    lastSun = new Date(today.setDate(last));
    
    const next = today.getDate() - today.getDay() + 8;
    nextMon = new Date(today.setDate(next));
  }

function initCalendar() {
    monthTag.innerHTML = months[currMonth] + " " + currYear;

    getMonday();
    console.log('this Monday: ', thisMon);
    let week = [];
    week[0] = thisMon.getDate();
    thisMon.setDate(thisMon.getDate() + 1); week[1] = thisMon.getDate(); 
    thisMon.setDate(thisMon.getDate() + 1); week[2] = thisMon.getDate(); 
    thisMon.setDate(thisMon.getDate() + 1); week[3] = thisMon.getDate(); 
    thisMon.setDate(thisMon.getDate() + 1); week[4] = thisMon.getDate(); 
    thisMon.setDate(thisMon.getDate() + 1); week[5] = thisMon.getDate(); 
    thisMon.setDate(thisMon.getDate() + 1); week[6] = thisMon.getDate(); 
    console.log(week);

}
initCalendar();

function getLastWeek() {
    let lastWeek = [];
    lastWeek[6] = lastSun.getDate();
    lastSun.setDate(lastSun.getDate() - 1); lastWeek[5] = lastSun.getDate(); 
    lastSun.setDate(lastSun.getDate() - 1); lastWeek[4] = lastSun.getDate(); 
    lastSun.setDate(lastSun.getDate() - 1); lastWeek[3] = lastSun.getDate(); 
    lastSun.setDate(lastSun.getDate() - 1); lastWeek[2] = lastSun.getDate(); 
    lastSun.setDate(lastSun.getDate() - 1); lastWeek[1] = lastSun.getDate(); 
    lastSun.setDate(lastSun.getDate() - 1); lastWeek[0] = lastSun.getDate(); 
    console.log(lastWeek);
    const last = lastSun.getDate() - lastSun.getDay();
    lastSun = new Date(lastSun.setDate(last));
    console.log('last Sunday: ', lastSun);
}
getLastWeek();

function getNextWeek() {
    let nextWeek = [];
    nextWeek[0] = nextMon.getDate();
    nextMon.setDate(nextMon.getDate() + 1); nextWeek[1] = nextMon.getDate(); 
    nextMon.setDate(nextMon.getDate() + 1); nextWeek[2] = nextMon.getDate(); 
    nextMon.setDate(nextMon.getDate() + 1); nextWeek[3] = nextMon.getDate(); 
    nextMon.setDate(nextMon.getDate() + 1); nextWeek[4] = nextMon.getDate(); 
    nextMon.setDate(nextMon.getDate() + 1); nextWeek[5] = nextMon.getDate(); 
    nextMon.setDate(nextMon.getDate() + 1); nextWeek[6] = nextMon.getDate(); 
    console.log(nextWeek);
    const next = nextMon.getDate() - nextMon.getDay() + 1;
    nextMon = new Date(nextMon.setDate(next));
    console.log('next Monday: ', nextMon);
}
getNextWeek();