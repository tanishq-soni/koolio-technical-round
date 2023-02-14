let elevator = document.getElementById("elevator");
let level0 = document.getElementById("level0");
let level1 = document.getElementById("level1");
let level2 = document.getElementById("level2");
let ding = new Audio("ding.mp3");

const l0upbtn = document.getElementById("l0up-btn");
const l1upbtn = document.getElementById("l1up-btn");
const l1downbtn = document.getElementById("l1down-btn");
const l2downbtn = document.getElementById("l2down-btn");

l0upbtn.addEventListener('click', l0moveup)
l1upbtn.addEventListener('click', l1moveup)
l1downbtn.addEventListener('click', l1movedown)
l2downbtn.addEventListener('click', l2movedown)

let currentfloor = 0;
let nextfloor;

function l0moveup(){
    nextfloor = 2;
    var distance = (currentfloor - nextfloor) * 300 - 3;
    elevator.style["transition"] = "10s linear";
    elevator.style.transform = "translateY(" + distance + "px)";
    setTimeout(() => {
        ding.play();  
    }, 10000);
      
}
function l1moveup(){
    if(nextfloor==0){
        return;
    }
    nextfloor=1;
    var distance = (currentfloor - nextfloor) * 300;
    elevator.style["transition"] = "5s linear"
    elevator.style.transform = "translateY(" + distance + "px)";
    setTimeout(() => {
        ding.play();  
    }, 5000);
}
function l2movedown(){
    nextfloor = 0;
    var distance = (currentfloor - nextfloor) * 300;
    elevator.style["transition"] = "10s linear"
    elevator.style.transform = "translateY(" + distance + "px)";
    setTimeout(() => {
        ding.play();  
    }, 10000);
}
function l1movedown(){
    if(nextfloor==2){
        return;
    }
    nextfloor = 1;
    var distance = (currentfloor - nextfloor) * 300;
    elevator.style["transition"] = "5s linear"
    elevator.style.transform = "translateY(" + distance + "px)";
    setTimeout(() => {
        ding.play();  
    }, 5000);
}



