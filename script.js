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

let eventsUl = document.querySelectorAll(".events");
let eventsLi = document.querySelectorAll(".event-li");
let eventsInput = document.querySelectorAll(".add-event-input");
let eventsBtn = document.querySelectorAll(".add-btn");
const addEventWrapper = document.querySelector(".add-event-wrapper");
const addEventTitle = document.querySelector(".event-name ");
const addEventSubmit = document.querySelector(".add-event-btn ");
let eventsContainer = document.querySelector(".events");

let updatedOnLoad = false;
let eventsArr = [];

function getToday() {
    const todayTag = document.querySelectorAll("div.day")
    const todayId = `${realToday.getFullYear()}${months[realToday.getMonth()]}${realToday.getDate()}`;
    for (let i = 0; i < 7; i++) {
        if (id[i] === todayId) {
            todayTag[i].classList.add('today');
        }
    }
}

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
        event.setAttribute('id', id[i]);
        const addInput = document.createElement('div');
        addInput.classList.add('add-event-input');
        addInput.setAttribute('id', id[i]);
        addInput.setAttribute('contenteditable', 'true');
        const addBtn = document.createElement('button');
        addBtn.textContent = '+ Add';
        addBtn.classList.add('add-btn');
        addBtn.setAttribute('id', id[i]);
        addBtn.setAttribute('type', 'submit');
        column.append(day, date, event, addInput, addBtn);
        weekContainer.append(column);
        
        if (day.textContent === dayArray[6] || day.textContent === dayArray[5]) {
            column.classList.add('column-dark');
        }
        
    }
    eventsUl = document.querySelectorAll(".events");
    eventsInput = document.querySelectorAll(".add-event-input");
    eventsBtn = document.querySelectorAll(".add-btn");
    eventsContainer = document.querySelector(".events");
}

function getMonday() {
    nowMon = new Date();
    console.log('nowMon:', nowMon);
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
    weekContainer.textContent = ''; //防止天數疊加
    
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
    updateEvents();
    getToday();
}

initCalendar();

function getNextMonday() {
    console.log('nowMon:', nowMon);
    const next = nowMon.getDate() - nowMon.getDay() + 8;
    nextMon = new Date(nowMon.setDate(next));
    console.log('nowMon:', nowMon);
}

function getLastMonday() {
    console.log('nowMon:', nowMon);
    const last = nowMon.getDate() - nowMon.getDay() - 6;
    lastMon = new Date(nowMon.setDate(last));
    console.log('nowMon:', nowMon);
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
    updateEvents();
    getToday();
    eventsBtn[0].addEventListener("click", addInputFunc0);
    eventsBtn[1].addEventListener("click", addInputFunc1);
    eventsBtn[2].addEventListener("click", addInputFunc2);
    eventsBtn[3].addEventListener("click", addInputFunc3);
    eventsBtn[4].addEventListener("click", addInputFunc4);
    eventsBtn[5].addEventListener("click", addInputFunc5);
    eventsBtn[6].addEventListener("click", addInputFunc6);
    eventsUl[0].addEventListener("click", (e) => {
        if (e.target.classList.contains("event-li")) {
            if (confirm("Are you sure you want to delete this event?")) {
                const eventTitle = e.target.childNodes[0].textContent;
                eventsArr.forEach((event) => {
                        event.events.forEach((item, index) => {
                            if (item.title === eventTitle) {
                                event.events.splice(index, 1);
                            }
                        });
                        
                    });
                updateEvents();
            }
        }
    });
    eventsUl[1].addEventListener("click", (e) => {
        if (e.target.classList.contains("event-li")) {
            if (confirm("Are you sure you want to delete this event?")) {
                const eventTitle = e.target.childNodes[0].textContent;
                eventsArr.forEach((event) => {
                        event.events.forEach((item, index) => {
                            if (item.title === eventTitle) {
                                event.events.splice(index, 1);
                            }
                        });
                        
                    });
                updateEvents();
            }
        }
    });
    eventsUl[2].addEventListener("click", (e) => {
        if (e.target.classList.contains("event-li")) {
            if (confirm("Are you sure you want to delete this event?")) {
                const eventTitle = e.target.childNodes[0].textContent;
                eventsArr.forEach((event) => {
                        event.events.forEach((item, index) => {
                            if (item.title === eventTitle) {
                                event.events.splice(index, 1);
                            }
                        });
                        
                    });
                updateEvents();
            }
        }
    });
    eventsUl[3].addEventListener("click", (e) => {
        if (e.target.classList.contains("event-li")) {
            if (confirm("Are you sure you want to delete this event?")) {
                const eventTitle = e.target.childNodes[0].textContent;
                eventsArr.forEach((event) => {
                        event.events.forEach((item, index) => {
                            if (item.title === eventTitle) {
                                event.events.splice(index, 1);
                            }
                        });
                        
                    });
                updateEvents();
            }
        }
    });
    eventsUl[4].addEventListener("click", (e) => {
        if (e.target.classList.contains("event-li")) {
            if (confirm("Are you sure you want to delete this event?")) {
                const eventTitle = e.target.childNodes[0].textContent;
                eventsArr.forEach((event) => {
                        event.events.forEach((item, index) => {
                            if (item.title === eventTitle) {
                                event.events.splice(index, 1);
                            }
                        });
                        
                    });
                updateEvents();
            }
        }
    });
    eventsUl[5].addEventListener("click", (e) => {
        if (e.target.classList.contains("event-li")) {
            if (confirm("Are you sure you want to delete this event?")) {
                const eventTitle = e.target.childNodes[0].textContent;
                eventsArr.forEach((event) => {
                        event.events.forEach((item, index) => {
                            if (item.title === eventTitle) {
                                event.events.splice(index, 1);
                            }
                        });
                        
                    });
                updateEvents();
            }
        }
    });
    eventsUl[6].addEventListener("click", (e) => {
        if (e.target.classList.contains("event-li")) {
            if (confirm("Are you sure you want to delete this event?")) {
                const eventTitle = e.target.childNodes[0].textContent;
                eventsArr.forEach((event) => {
                        event.events.forEach((item, index) => {
                            if (item.title === eventTitle) {
                                event.events.splice(index, 1);
                            }
                        });
                        
                    });
                updateEvents();
            }
        }
    });
}

function getLastWeek() {
    weekContainer.textContent = '';
    getLastMonday()
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
    updateEvents();
    getToday();
    eventsBtn[0].addEventListener("click", addInputFunc0);
    eventsBtn[1].addEventListener("click", addInputFunc1);
    eventsBtn[2].addEventListener("click", addInputFunc2);
    eventsBtn[3].addEventListener("click", addInputFunc3);
    eventsBtn[4].addEventListener("click", addInputFunc4);
    eventsBtn[5].addEventListener("click", addInputFunc5);
    eventsBtn[6].addEventListener("click", addInputFunc6);
    eventsUl[0].addEventListener("click", (e) => {
        if (e.target.classList.contains("event-li")) {
            if (confirm("Are you sure you want to delete this event?")) {
                const eventTitle = e.target.childNodes[0].textContent;
                eventsArr.forEach((event) => {
                        event.events.forEach((item, index) => {
                            if (item.title === eventTitle) {
                                event.events.splice(index, 1);
                            }
                        });
                        
                    });
                updateEvents();
            }
        }
    });
    eventsUl[1].addEventListener("click", (e) => {
        if (e.target.classList.contains("event-li")) {
            if (confirm("Are you sure you want to delete this event?")) {
                const eventTitle = e.target.childNodes[0].textContent;
                eventsArr.forEach((event) => {
                        event.events.forEach((item, index) => {
                            if (item.title === eventTitle) {
                                event.events.splice(index, 1);
                            }
                        });
                        
                    });
                updateEvents();
            }
        }
    });
    eventsUl[2].addEventListener("click", (e) => {
        if (e.target.classList.contains("event-li")) {
            if (confirm("Are you sure you want to delete this event?")) {
                const eventTitle = e.target.childNodes[0].textContent;
                eventsArr.forEach((event) => {
                        event.events.forEach((item, index) => {
                            if (item.title === eventTitle) {
                                event.events.splice(index, 1);
                            }
                        });
                        
                    });
                updateEvents();
            }
        }
    });
    eventsUl[3].addEventListener("click", (e) => {
        if (e.target.classList.contains("event-li")) {
            if (confirm("Are you sure you want to delete this event?")) {
                const eventTitle = e.target.childNodes[0].textContent;
                eventsArr.forEach((event) => {
                        event.events.forEach((item, index) => {
                            if (item.title === eventTitle) {
                                event.events.splice(index, 1);
                            }
                        });
                        
                    });
                updateEvents();
            }
        }
    });
    eventsUl[4].addEventListener("click", (e) => {
        if (e.target.classList.contains("event-li")) {
            if (confirm("Are you sure you want to delete this event?")) {
                const eventTitle = e.target.childNodes[0].textContent;
                eventsArr.forEach((event) => {
                        event.events.forEach((item, index) => {
                            if (item.title === eventTitle) {
                                event.events.splice(index, 1);
                            }
                        });
                        
                    });
                updateEvents();
            }
        }
    });
    eventsUl[5].addEventListener("click", (e) => {
        if (e.target.classList.contains("event-li")) {
            if (confirm("Are you sure you want to delete this event?")) {
                const eventTitle = e.target.childNodes[0].textContent;
                eventsArr.forEach((event) => {
                        event.events.forEach((item, index) => {
                            if (item.title === eventTitle) {
                                event.events.splice(index, 1);
                            }
                        });
                        
                    });
                updateEvents();
            }
        }
    });
    eventsUl[6].addEventListener("click", (e) => {
        if (e.target.classList.contains("event-li")) {
            if (confirm("Are you sure you want to delete this event?")) {
                const eventTitle = e.target.childNodes[0].textContent;
                eventsArr.forEach((event) => {
                        event.events.forEach((item, index) => {
                            if (item.title === eventTitle) {
                                event.events.splice(index, 1);
                            }
                        });
                        
                    });
                updateEvents();
            }
        }
    });
}

prev.addEventListener("click", getLastWeek);
next.addEventListener("click", getNextWeek);


todayBtn.addEventListener("click", () => {
    initCalendar();
});


function updateSavedEvents() {
    localStorage.setItem("events", JSON.stringify(eventsArr));
}                        

function getSavedEvents() {
    if (localStorage.getItem("events")) {
        eventsArr.push(...JSON.parse(localStorage.getItem("events")));
    } else {
        eventsArr = [
            {
                id: '2023JAN25',
                events: [
                    {title: '滑鼠點擊即可刪除',}, 
                    {title: 'delete o click',},
                ],
            },
            {
                id: '2023FEB2',
                events: [
                    {title: '滑鼠點擊即可刪除',}, 
                    {title: 'delete o click',},
                ],
            },
        ];
    }
}                                                     

function updateEvents() {
    if(!updatedOnLoad) {
        getSavedEvents();
    }
    for (let i = 0; i < 7; i++) {
        eventsUl[i].textContent = '';
    }
    eventsArr.forEach( (eventArr) => {
        for (let i = 0; i < 7; i++) {
            if (eventsUl[i].id === eventArr.id) {
                for (let k = 0; k < eventArr.events.length; k++) {
                    const item = document.createElement('li');
                    item.textContent = eventArr.events[k].title;
                    if (item.textContent) {
                        item.classList.add('event-li');
                        item.setAttribute('id', id[i]);
                        eventsUl[i].appendChild(item);
                        item.spellcheck = false;
                    }
                }
            }
        }
        eventsLi = document.querySelectorAll(".event-li");
    });
    updatedOnLoad = true;
    updateSavedEvents();
}

eventsUl.forEach( (ul) => {
    ul.addEventListener("click", (e) => {
        if (e.target.classList.contains("event-li")) {
            if (confirm("Are you sure you want to delete this event?")) {
                const eventTitle = e.target.childNodes[0].textContent;
                eventsArr.forEach((event) => {
                        event.events.forEach((item, index) => {
                            if (item.title === eventTitle) {
                                event.events.splice(index, 1);
                            }
                        });
                        
                    });
                updateEvents();
            }
        }
    });
})

function addInputFunc0() {
    const eventText = eventsInput[0].textContent;
    const eventPush = {
        id: eventsInput[0].id,
        events: [
            {title: eventText}, 
        ],
    }
    eventsArr.push(eventPush);
    eventsInput[0].textContent = ''; //消除輸入的舊文字
    updateEvents();

}
function addInputFunc1() {
    const eventText = eventsInput[1].textContent;
    const eventPush = {
        id: eventsInput[1].id,
        events: [
            {title: eventText}, 
        ],
    }
    eventsArr.push(eventPush);
    eventsInput[1].textContent = '';
    updateEvents();

}
function addInputFunc2() {
    const eventText = eventsInput[2].textContent;
    const eventPush = {
        id: eventsInput[2].id,
        events: [
            {title: eventText}, 
        ],
    }
    eventsArr.push(eventPush);
    eventsInput[2].textContent = '';
    updateEvents();

}
function addInputFunc3() {
    const eventText = eventsInput[3].textContent;
    const eventPush = {
        id: eventsInput[3].id,
        events: [
            {title: eventText}, 
        ],
    }
    eventsArr.push(eventPush);
    eventsInput[3].textContent = '';
    updateEvents();

}
function addInputFunc4() {
    const eventText = eventsInput[4].textContent;
    const eventPush = {
        id: eventsInput[4].id,
        events: [
            {title: eventText}, 
        ],
    }
    eventsArr.push(eventPush);
    eventsInput[4].textContent = '';
    updateEvents();

}
function addInputFunc5() {
    const eventText = eventsInput[5].textContent;
    const eventPush = {
        id: eventsInput[5].id,
        events: [
            {title: eventText}, 
        ],
    }
    eventsArr.push(eventPush);
    eventsInput[5].textContent = '';
    updateEvents();

}
function addInputFunc6() {
    const eventText = eventsInput[6].textContent;
    const eventPush = {
        id: eventsInput[6].id,
        events: [
            {title: eventText}, 
        ],
    }
    eventsArr.push(eventPush);
    eventsInput[6].textContent = '';
    updateEvents();

}

eventsBtn[0].addEventListener("click", addInputFunc0);
eventsBtn[1].addEventListener("click", addInputFunc1);
eventsBtn[2].addEventListener("click", addInputFunc2);
eventsBtn[3].addEventListener("click", addInputFunc3);
eventsBtn[4].addEventListener("click", addInputFunc4);
eventsBtn[5].addEventListener("click", addInputFunc5);
eventsBtn[6].addEventListener("click", addInputFunc6);
//querySelectAll取得的是元素节点组成的数组, 要把我们要的节点，从这个数组里取出来，才能给这个节点添加监听事件