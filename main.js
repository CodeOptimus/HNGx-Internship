let date = new Date();

let dayList = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

let today = dayList[date.getDay()-1];


let time = document.getElementById("currentTime");

setInterval(() =>{
let utcTime = new Date();
time.innerHTML = utcTime.toLocaleTimeString();
},1000)


const todayTag = document.getElementById('weekDay');
const timeUtc = document.getElementById('currentTime');

todayTag.textContent=today;

