const monthTag = document.querySelector(".this-month")
const weekContainer = document.querySelector(".week-container")
const prev = document.querySelector(".prev")
const next = document.querySelector(".next")

let today = new Date();
let currMonth = today.getMonth();
let currYear = today.getFullYear();
let thisMon = new Date();
let lastMon = new Date();
let nextMon = new Date();
let nowMon = new Date();

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
const dayArray = ['MON', 'TUE', 'WEN', 'THU', 'FRI', 'SAT', 'SUN'];

function buildCalendar() {

    for (let i = 0; i < 7; i++) {
        const day = document.createElement('h2');
        day.textContent = dayArray[i];
        day.classList.add('h2');
        const date = document.createElement('div');
        date.textContent = weekArray[i];
        date.classList.add('day');
        const column = document.createElement('div');
        column.classList.add('column');
        column.append(day, date);
        weekContainer.append(column);
    }

    // weekArray.forEach((dateTag) => {
    //     const day = document.createElement('h2');
    //     day.classList.add('h2');
    //     const date = document.createElement('div');
    //     date.textContent = `${dateTag}`;
    //     date.classList.add('day');
    //     const column = document.createElement('div');
    //     column.classList.add('column');
    //     column.append(day, date);
    //     weekContainer.append(column);
    // })
}

function getMonday() {
    const first = today.getDate() - today.getDay() + 1;
    thisMon = new Date(today.setDate(first));
    nowMon =  new Date(today.setDate(first));
    console.log('now Monday: ', nowMon);

}

function initCalendar() {
    monthTag.innerHTML = `${months[currMonth]} ${currYear}`;
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
    console.log('this Sunday: ', thisMon);
    console.log(weekArray);

    buildCalendar();

}
initCalendar();

function getNextMonday() {
    const next = nowMon.getDate() - nowMon.getDay() + 8;
    console.log(next);
    nextMon = new Date(nowMon.setDate(next));
    console.log('next Monday: ', nextMon);
    // nowMon = new Date(nowMon.setDate(next));
    console.log('now Monday: ', nowMon);
}

function getLastSunday() {
    const last = nowMon.getDate() - nowMon.getDay() - 6;
    lastMon = new Date(nowMon.setDate(last));
    // nowMon = new Date(nowMon.setDate(last));
    console.log('now Monday: ', nowMon);
}

function getNextWeek() {
    weekContainer.textContent = '';
    getNextMonday();
    currMonth = nextMon.getMonth();
    currYear = nextMon.getFullYear();
    monthTag.innerHTML = `${months[currMonth]} ${currYear}`;
    console.log('this Monday: ', nextMon);
    weekArray[0] = nextMon.getDate();
    nextMon.setDate(nextMon.getDate() + 1); weekArray[1] = nextMon.getDate();
    nextMon.setDate(nextMon.getDate() + 1); weekArray[2] = nextMon.getDate();
    nextMon.setDate(nextMon.getDate() + 1); weekArray[3] = nextMon.getDate();
    nextMon.setDate(nextMon.getDate() + 1); weekArray[4] = nextMon.getDate();
    nextMon.setDate(nextMon.getDate() + 1); weekArray[5] = nextMon.getDate();
    nextMon.setDate(nextMon.getDate() + 1); weekArray[6] = nextMon.getDate();
    console.log(weekArray);
 
    buildCalendar();
}

function getLastWeek() {
    weekContainer.textContent = '';
    getLastSunday()
    currMonth = lastMon.getMonth();
    currYear = lastMon.getFullYear();
    monthTag.innerHTML = `${months[currMonth]} ${currYear}`;
    console.log('last Monday: ', lastMon);
    weekArray[0] = lastMon.getDate();
    lastMon.setDate(lastMon.getDate() + 1); weekArray[1] = lastMon.getDate();
    lastMon.setDate(lastMon.getDate() + 1); weekArray[2] = lastMon.getDate();
    lastMon.setDate(lastMon.getDate() + 1); weekArray[3] = lastMon.getDate();
    lastMon.setDate(lastMon.getDate() + 1); weekArray[4] = lastMon.getDate();
    lastMon.setDate(lastMon.getDate() + 1); weekArray[5] = lastMon.getDate();
    lastMon.setDate(lastMon.getDate() + 1); weekArray[6] = lastMon.getDate();
    console.log(weekArray);
 

    buildCalendar();
}

prev.addEventListener("click", getLastWeek);
next.addEventListener("click", getNextWeek);