const monthTag = document.querySelector(".this-month");
const weekContainer = document.querySelector(".week-container");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const todayBtn = document.querySelector(".today-btn");

let today = new Date();
let realToday = new Date();
let currMonth;
let currYear;
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

let id = [];
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
        const event = document.createElement('div');
        event.textContent = '';
        event.classList.add('event');
        event.setAttribute('id', id[i])
        const column = document.createElement('div');
        column.classList.add('column');
        column.append(day, date, event);
        weekContainer.append(column);
    }
}

function getMonday() {
    const first = today.getDate() - today.getDay() + 1;
    thisMon = new Date(today.setDate(first));
    nowMon =  new Date(today.setDate(first));
    console.log('now Monday: ', nowMon);

}

function initCalendar() {
    currMonth = thisMon.getMonth();
    currYear = thisMon.getFullYear();
    monthTag.innerHTML = `${months[currMonth]} ${currYear}`;
    weekContainer.textContent = '';
    getMonday();
    console.log('this Monday: ', thisMon);
    weekArray[0] = thisMon.getDate();
    currMonth = thisMon.getMonth();
    currYear = thisMon.getFullYear();
    id[0] = `${currYear}${months[currMonth]}${weekArray[0]}`;
    thisMon.setDate(thisMon.getDate() + 1); weekArray[1] = thisMon.getDate();
    currMonth = thisMon.getMonth();
    currYear = thisMon.getFullYear();
    id[1] = `${currYear}${months[currMonth]}${weekArray[1]}`;
    thisMon.setDate(thisMon.getDate() + 1); weekArray[2] = thisMon.getDate();
    currMonth = thisMon.getMonth();
    currYear = thisMon.getFullYear();
    id[2] = `${currYear}${months[currMonth]}${weekArray[2]}`;
    thisMon.setDate(thisMon.getDate() + 1); weekArray[3] = thisMon.getDate();
    currMonth = thisMon.getMonth();
    currYear = thisMon.getFullYear();
    id[3] = `${currYear}${months[currMonth]}${weekArray[3]}`;
    thisMon.setDate(thisMon.getDate() + 1); weekArray[4] = thisMon.getDate();
    currMonth = thisMon.getMonth();
    currYear = thisMon.getFullYear();
    id[4] = `${currYear}${months[currMonth]}${weekArray[4]}`;
    thisMon.setDate(thisMon.getDate() + 1); weekArray[5] = thisMon.getDate();
    currMonth = thisMon.getMonth();
    currYear = thisMon.getFullYear();
    id[5] = `${currYear}${months[currMonth]}${weekArray[5]}`;
    thisMon.setDate(thisMon.getDate() + 1); weekArray[6] = thisMon.getDate();
    currMonth = thisMon.getMonth();
    currYear = thisMon.getFullYear();
    id[6] = `${currYear}${months[currMonth]}${weekArray[6]}`;
    console.log('this Sunday: ', thisMon);
    console.log(weekArray);
    console.log(id);
    

    buildCalendar();
    getToday();
}

initCalendar();

function getToday() {
    const todayTag = document.querySelectorAll("div.day")
    // console.log(realToday.getDate());
    // console.log(todayTag[1].textContent);
    for (let i = 0; i < 7; i++) {
        if (realToday.getDate().toString() === todayTag[i].textContent) {
            todayTag[i].classList.add('today');
        }
    }
}

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
    currMonth = nextMon.getMonth();
    currYear = nextMon.getFullYear();
    id[0] = `${currYear}${months[currMonth]}${weekArray[0]}`;
    nextMon.setDate(nextMon.getDate() + 1); weekArray[1] = nextMon.getDate();
    currMonth = nextMon.getMonth();
    currYear = nextMon.getFullYear();
    id[1] = `${currYear}${months[currMonth]}${weekArray[1]}`;
    nextMon.setDate(nextMon.getDate() + 1); weekArray[2] = nextMon.getDate();
    currMonth = nextMon.getMonth();
    currYear = nextMon.getFullYear();
    id[2] = `${currYear}${months[currMonth]}${weekArray[2]}`;
    nextMon.setDate(nextMon.getDate() + 1); weekArray[3] = nextMon.getDate();
    currMonth = nextMon.getMonth();
    currYear = nextMon.getFullYear();
    id[3] = `${currYear}${months[currMonth]}${weekArray[3]}`;
    nextMon.setDate(nextMon.getDate() + 1); weekArray[4] = nextMon.getDate();
    currMonth = nextMon.getMonth();
    currYear = nextMon.getFullYear();
    id[4] = `${currYear}${months[currMonth]}${weekArray[4]}`;
    nextMon.setDate(nextMon.getDate() + 1); weekArray[5] = nextMon.getDate();
    currMonth = nextMon.getMonth();
    currYear = nextMon.getFullYear();
    id[5] = `${currYear}${months[currMonth]}${weekArray[5]}`;
    nextMon.setDate(nextMon.getDate() + 1); weekArray[6] = nextMon.getDate();
    currMonth = nextMon.getMonth();
    currYear = nextMon.getFullYear();
    id[6] = `${currYear}${months[currMonth]}${weekArray[6]}`;
    console.log(weekArray);
 
    buildCalendar();
    getToday();
}

function getLastWeek() {
    weekContainer.textContent = '';
    getLastSunday()
    currMonth = lastMon.getMonth();
    currYear = lastMon.getFullYear();
    monthTag.innerHTML = `${months[currMonth]} ${currYear}`;
    console.log('last Monday: ', lastMon);
    weekArray[0] = lastMon.getDate();
    currMonth = lastMon.getMonth();
    currYear = lastMon.getFullYear();
    id[0] = `${currYear}${months[currMonth]}${weekArray[0]}`;
    lastMon.setDate(lastMon.getDate() + 1); weekArray[1] = lastMon.getDate();
    currMonth = lastMon.getMonth();
    currYear = lastMon.getFullYear();
    id[1] = `${currYear}${months[currMonth]}${weekArray[1]}`;
    lastMon.setDate(lastMon.getDate() + 1); weekArray[2] = lastMon.getDate();
    currMonth = lastMon.getMonth();
    currYear = lastMon.getFullYear();
    id[2] = `${currYear}${months[currMonth]}${weekArray[2]}`;
    lastMon.setDate(lastMon.getDate() + 1); weekArray[3] = lastMon.getDate();
    currMonth = lastMon.getMonth();
    currYear = lastMon.getFullYear();
    id[3] = `${currYear}${months[currMonth]}${weekArray[3]}`;
    lastMon.setDate(lastMon.getDate() + 1); weekArray[4] = lastMon.getDate();
    currMonth = lastMon.getMonth();
    currYear = lastMon.getFullYear();
    id[4] = `${currYear}${months[currMonth]}${weekArray[4]}`;
    lastMon.setDate(lastMon.getDate() + 1); weekArray[5] = lastMon.getDate();
    currMonth = lastMon.getMonth();
    currYear = lastMon.getFullYear();
    id[5] = `${currYear}${months[currMonth]}${weekArray[5]}`;
    lastMon.setDate(lastMon.getDate() + 1); weekArray[6] = lastMon.getDate();
    currMonth = lastMon.getMonth();
    currYear = lastMon.getFullYear();
    id[6] = `${currYear}${months[currMonth]}${weekArray[6]}`;
    console.log(weekArray);
 

    buildCalendar();
    getToday();
}

prev.addEventListener("click", getLastWeek);
next.addEventListener("click", getNextWeek);

todayBtn.addEventListener("click", () => {
    today = new Date();
    month = today.getMonth();
    year = today.getFullYear();
    initCalendar();
});







//function to save events in local storage
function saveEvents() {
    localStorage.setItem("events", JSON.stringify(eventsArr));
}

//function to get events from local storage
function getEvents() {
    //check if events are already saved in local storage then return event else nothing
    if (localStorage.getItem("events") === null) {
        return;
    }
    eventsArr.push(...JSON.parse(localStorage.getItem("events")));
}