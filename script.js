const monthTag = document.querySelector(".this-month")
const weekContainer = document.querySelector(".week-container")
const prev = document.querySelector(".prev")
const next = document.querySelector(".next")

let today = new Date();
let thisMon = new Date();
let lastSun = new Date();
let nextMon = new Date();
let currMonth = lastSun.getMonth();
let currYear = lastSun.getFullYear();
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

let weekArray = [];
let lastWeekArray = [];
let nextWeekArray = [];

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
    weekContainer.textContent = ''; 
    getMonday();
    console.log('this Monday: ', thisMon);
    weekArray[0] = thisMon.getDate();
    thisMon.setDate(thisMon.getDate() + 1); weekArray[1] = thisMon.getDate(); 
    thisMon.setDate(thisMon.getDate() + 1); weekArray[2] = thisMon.getDate(); 
    thisMon.setDate(thisMon.getDate() + 1); weekArray[3] = thisMon.getDate(); 
    thisMon.setDate(thisMon.getDate() + 1); weekArray[4] = thisMon.getDate(); 
    thisMon.setDate(thisMon.getDate() + 1); weekArray[5] = thisMon.getDate(); 
    thisMon.setDate(thisMon.getDate() + 1); weekArray[6] = thisMon.getDate(); 
    console.log(weekArray);

    const dayArray = ['MON', 'TUE', 'WEN', 'THU', 'FRI', 'SAT', 'SUN'];

    weekArray.forEach((dateTag) => {
        const day = document.createElement('h2');
        day.classList.add('h2');
        const date = document.createElement('div');
        date.textContent = `${dateTag}`;
        date.classList.add('day');
        const column = document.createElement('div');
        column.classList.add('column');
        column.append(day, date);
        weekContainer.append(column);
        })

}
initCalendar();

function getLastWeek() {
    weekContainer.textContent = ''; 
    lastWeekArray[6] = lastSun.getDate();
    lastSun.setDate(lastSun.getDate() - 1); lastWeekArray[5] = lastSun.getDate(); 
    lastSun.setDate(lastSun.getDate() - 1); lastWeekArray[4] = lastSun.getDate(); 
    lastSun.setDate(lastSun.getDate() - 1); lastWeekArray[3] = lastSun.getDate(); 
    lastSun.setDate(lastSun.getDate() - 1); lastWeekArray[2] = lastSun.getDate(); 
    lastSun.setDate(lastSun.getDate() - 1); lastWeekArray[1] = lastSun.getDate(); 
    lastSun.setDate(lastSun.getDate() - 1); lastWeekArray[0] = lastSun.getDate(); 
    console.log(lastWeekArray);
    const last = lastSun.getDate() - lastSun.getDay();
    lastSun = new Date(lastSun.setDate(last));
    console.log('last Sunday: ', lastSun);

    lastWeekArray.forEach((dateTag) => {
        const day = document.createElement('h2');
        day.classList.add('h2');
        const date = document.createElement('div');
        date.textContent = `${dateTag}`;
        date.classList.add('day');
        const column = document.createElement('div');
        column.classList.add('column');
        column.append(day, date);
        weekContainer.append(column);
        })
}

function getNextWeek() {
    weekContainer.textContent = ''; 
    nextWeekArray[0] = nextMon.getDate();
    nextMon.setDate(nextMon.getDate() + 1); nextWeekArray[1] = nextMon.getDate(); 
    nextMon.setDate(nextMon.getDate() + 1); nextWeekArray[2] = nextMon.getDate(); 
    nextMon.setDate(nextMon.getDate() + 1); nextWeekArray[3] = nextMon.getDate(); 
    nextMon.setDate(nextMon.getDate() + 1); nextWeekArray[4] = nextMon.getDate(); 
    nextMon.setDate(nextMon.getDate() + 1); nextWeekArray[5] = nextMon.getDate(); 
    nextMon.setDate(nextMon.getDate() + 1); nextWeekArray[6] = nextMon.getDate(); 
    console.log(nextWeekArray);
    const next = nextMon.getDate() - nextMon.getDay() + 1;
    nextMon = new Date(nextMon.setDate(next));
    console.log('next Monday: ', nextMon);

    nextWeekArray.forEach((dateTag) => {
        const day = document.createElement('h2');
        day.classList.add('h2');
        const date = document.createElement('div');
        date.textContent = `${dateTag}`;
        date.classList.add('day');
        const column = document.createElement('div');
        column.classList.add('column');
        column.append(day, date);
        weekContainer.append(column);
        })
}

prev.addEventListener("click", getLastWeek);
next.addEventListener("click", getNextWeek);