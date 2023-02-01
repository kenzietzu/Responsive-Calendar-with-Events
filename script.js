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
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
];

let id = [];
let weekArray = [];
const dayArray = ['MON', 'TUE', 'WEN', 'THU', 'FRI', 'SAT', 'SUN'];

function buildCalendar() {

    for (let i = 0; i < 7; i++) {
        const column = document.createElement('div');
        column.classList.add('column');
        const day = document.createElement('h2');
        day.textContent = dayArray[i];
        day.classList.add('h2');
        const date = document.createElement('div');
        date.textContent = weekArray[i];
        date.classList.add('day');
        const event = document.createElement('ul');
        event.textContent = '';
        event.classList.add('events');
        event.setAttribute('id', id[i])
        column.append(day, date, event);
        weekContainer.append(column);
    }
}

function getMonday() {
    console.log(today);
    const first = today.getDate() - today.getDay() + 1;
    thisMon = new Date(today.setDate(first));
    console.log('this Monday: ', thisMon);
}

function initCalendar() {
    getMonday();
    currMonth = realToday.getMonth();
    currYear = realToday.getFullYear();
    monthTag.innerHTML = `${months[currMonth]} ${currYear}`;
    weekContainer.textContent = '';
    
    weekArray[0] = thisMon.getDate();
    currMonth = thisMon.getMonth();
    currYear = thisMon.getFullYear();
    id[0] = `${currYear}${months[currMonth]}${weekArray[0]}`;
    for (let i = 1; i < 7; i++) {
        thisMon.setDate(thisMon.getDate() + 1); 
        weekArray[i] = thisMon.getDate();
        currMonth = thisMon.getMonth();
        currYear = thisMon.getFullYear();
        id[i] = `${currYear}${months[currMonth]}${weekArray[i]}`;
    }
    console.log(weekArray);
    console.log(id);

    buildCalendar();
    getToday();
}

initCalendar();

function getToday() {
    const todayTag = document.querySelectorAll("div.day")
    const todayId = `${realToday.getFullYear()}${months[realToday.getMonth()]}${realToday.getDate()}`;
    for (let i = 0; i < 7; i++) {
        if (id[i] === todayId) {
            todayTag[i].classList.add('today');
        }
    }
}

function getNextMonday() {
    console.log(nowMon);
    const next = nowMon.getDate() - nowMon.getDay() + 8;
    nextMon = new Date(nowMon.setDate(next));
    console.log(nowMon);
}

function getLastSunday() {
    console.log(nowMon);
    const last = nowMon.getDate() - nowMon.getDay() - 6;
    lastMon = new Date(nowMon.setDate(last));
    console.log(nowMon);
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
    for (let i = 1; i < 7; i++) {
        nextMon.setDate(nextMon.getDate() + 1); 
        weekArray[i] = nextMon.getDate();
        currMonth = nextMon.getMonth();
        currYear = nextMon.getFullYear();
        id[i] = `${currYear}${months[currMonth]}${weekArray[i]}`;
    }
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
    console.log('this Monday: ', lastMon);
    weekArray[0] = lastMon.getDate();
    currMonth = lastMon.getMonth();
    currYear = lastMon.getFullYear();
    id[0] = `${currYear}${months[currMonth]}${weekArray[0]}`;
    for (let i = 1; i < 7; i++) {
        lastMon.setDate(lastMon.getDate() + 1); 
        weekArray[i] = lastMon.getDate();
        currMonth = lastMon.getMonth();
        currYear = lastMon.getFullYear();
        id[i] = `${currYear}${months[currMonth]}${weekArray[i]}`;
    }
    console.log(weekArray);
 
    buildCalendar();
    getToday();
}

prev.addEventListener("click", getLastWeek);
next.addEventListener("click", getNextWeek);

todayBtn.addEventListener("click", () => {
    initCalendar();
});

// const eventDay = document.querySelector(".event-day");
// const eventDate = document.querySelector(".event-date");
const eventsUl = document.querySelectorAll(".events");
const addEventWrapper = document.querySelector(".add-event-wrapper ");
// const addEventCloseBtn = document.querySelector(".close ");
const addEventTitle = document.querySelector(".event-name ");
const addEventSubmit = document.querySelector(".add-event-btn ");

const eventsArr = [
    {
        id: '2023JAN31',
        events: [
            {title: 'grocery shopping',}, 
            {title: 'fixing car',},
        ],
    },
    {
        id: '2023FEB2',
        events: [
            {title: 'having a facial',}, 
            {title: 'get a haircut',},
        ],
    },
];

console.log(eventsArr[0].id); //id
console.log(eventsArr[1].events[0].title); //task
console.log(eventsUl[1].id); //Ul id

function buildEvents() {
    eventsArr.forEach( (eventArr) => {
        console.log(eventArr);
        for (let i = 0; i < 7; i++) {
            console.log(eventsUl[i].id);
            if (eventsUl[i].id === eventArr.id) {
                for (let k = 0; k < eventArr.events.length; k++) {
                    const item = document.createElement('li');
                    item.textContent = eventArr.events[k].title;
                    console.log(item);
                    eventsUl[i].appendChild(item);
                }
            }
        }
    });
}
buildEvents();

// function buildEvents() {
//     eventsArr.forEach((event) => {
//         const {id, events} = event;
//         for (let i = 0; i < 7; i++) {
//             if (eventsContainer[i].id = id) {
//                 const item = document.createElement('div');
//                 item.textContent = events[i].title;
//                 eventsContainer[i].appendChild(item);
//             }
//         }

//     })
// }


// console.log(eventsContainer);