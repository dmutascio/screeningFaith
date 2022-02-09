const today = new Date();
const days = new Map();
const months = new Map();
const namesMen = [
    "Hugh Jass",
    "Mike Hawk",
    "Ben Dover",
    "Peter File",
    "Heywood Jablowme",
    "Barry McKockiner",
    "Hugh G. Rection",
    "Mike Oxlong",
    "Phil McCraken",
    "Gabe Itch",
    "Moe Lester",
    "Justin Herass",
    "Todd Lerfondler",
    "Gabe Utsecks",
    "Hugh Janus",
    "Ray Pist",
    "Harry Anoos",
    "Hari Balsac",
    "Ped O\’Phyl",
    "York Oxmall",
    "Ice Wallow Come",
    "Biggie Rections",
    "Bo Nerr",
    "Jack Meoff",
    "Mike Lit",
    "Matt Sterbater",
    "Zuck Mabaulz",
    "Dig Bick",
    "Mike Lithurts"
]

const namesWomen = [
    "Wilma Diqfit", 
    "Dixie Normous",
    "Betty Phucker",
    "Miss Carriage",
    "Maya Normus Bhut",
    "Anna Borshin",
    "Wilma Dikfit",
    "Craven Morehed",
    "Tera Wrist",
    "E. Norma Stits",
    "Mass Debater",
    "Jenny Talia",
    "Tess Tickles",
    "Anne Null",
    "Cle Torres",
    "Pooh See",
    "Dill Dough",
    "Kimmy Hed"
]

days.set(0, 'Sunday');
days.set(1, 'Monday');
days.set(2, 'Tuesday');
days.set(3, 'Wednesday');
days.set(4, 'Thursday');
days.set(5, 'Friday');
days.set(6, 'Saturday');

months.set(0, 'January')
months.set(1, 'February')
months.set(2, 'March')
months.set(3, 'April')
months.set(4, 'May')
months.set(5, 'June')
months.set(6, 'July')
months.set(7, 'August')
months.set(8, 'September')
months.set(9, 'October')
months.set(10, 'November')
months.set(11, 'December')

var gender = true;

window.onload = function() {
    generateName(namesMen);
};

var day = today.getDay();
day = days.get(day);
var month = today.getMonth();
month = months.get(month);
var date = today.getUTCDate();
var year = today.getFullYear();
var hours = today.getHours();
var ampm = hours >= 12 ? 'PM' : 'AM';
hours = hours % 12;
hours = hours ? hours : 12;
var mins = (today.getMinutes()<10?'0':'') + today.getMinutes();
var fullDate = day + ", " + month + " " + date + ", " + year;
var fullTime = hours + ":" + mins + " " + ampm;
var nextDay;
if (today.getDay() == 6){
    nextDay = 0;
}
else{
    nextDay = today.getDay() +1;
}

var nextDate = days.get(nextDay) + ", " + month + " " + (date+1) + ", " + year;

document.getElementById("date").innerHTML = fullDate;
document.getElementById("nextDate").innerHTML = nextDate;
var times = document.getElementsByClassName("time");
for(var i = 0; i < times.length; i++) {
    times[i].innerHTML = fullTime;
}

function randName (names){
    var index = Math.floor(Math.random() * names.length);
    var name = names[index];
    return name;
}

function userName (name){
    let nameArray = name.split(" ")
    var first = nameArray[0];
    first = first[0];
    var last = nameArray[nameArray.length-1]
    var username = first+"."+last;
    return username;
}

function generateName (names){
    var name = randName(names);
    var username = userName(name);
    username = username.toLowerCase();
    document.getElementById("fullName").innerHTML = name;
    document.getElementById("username").innerHTML = username;
}

function switchGender (){
    if (gender == true){
        generateName(namesMen);
    }
    else {
        generateName(namesWomen);
    }
    gender = !gender;
}