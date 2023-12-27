const resetButton = document.querySelector(".reset");
const startButton = document.querySelector(".start-stop");
const lapButton = document.querySelector(".lap");
const clearButton = document.querySelector(".lap-clear");

const minute = document.querySelector(".mins");
const second = document.querySelector(".seconds");
const centiSecond = document.querySelector(".millis");
const laps = document.querySelector(".laps");


let isStart = false;
let isReset = false;

let minsCounter = 0;
let secondsCounter = 0;
let centiCounter = 0;
let lapItem = 0;

let mins;
let seconds ;
let centiSeconds;

const toggleButton = () => {
    lapButton.classList.remove("hidden");
    resetButton.classList.remove("hidden");
}

const start = () => {
    if (!isStart && !isReset) {
        startButton.innerHTML = "<img src='./images/pause-icon.png'>"; 

        mins =  setInterval(() => {
            second.innerHTML= `${++minsCounter} :`;
         }, 60*1000);


        seconds =  setInterval(() => {
                   if (secondsCounter === 60){
                    secondsCounter =0 ;
                   }
                   second.innerHTML= `&nbsp${++secondsCounter} :`;
                }, 1000);


        centiSeconds =  setInterval(() => {
                        if (centiCounter === 100){
                            centiCounter =0 ;
                        }
                        centiSecond.innerHTML= `&nbsp${++centiCounter} `;
                    }, 10);
                    
                    
        isStart = true;
        isReset = true;
    } 
    else {
      startButton.innerHTML = "<img src='./images/start-icon.png'>"; 
      clearInterval(seconds);
      clearInterval(centiSeconds);
      isStart = false;
      isReset= false;
    }
    toggleButton();
}


const reset = () => {
    isReset= true;
    isStart = true;
    start();
    lapButton.classList.add("hidden");
    resetButton.classList.add("hidden");
    second.innerHTML='&nbsp;0 :';
    centiSecond.innerHTML='&nbsp;0';
    minute.innerHTML='0 :';
    secondsCounter=0;
    lapItem = 0;
}
  
const lap = () => {
    const li = document.createElement("li");
    const number = document.createElement("span");
    const timeStamp = document.createElement("span");

    li.setAttribute("class", "border-lap");
    number.setAttribute("class", "number");
    timeStamp.setAttribute("class", "time");

    number.innerHTML = `${++lapItem}`;
    timeStamp.innerHTML=`${minsCounter} : ${secondsCounter} : ${centiCounter}`;

    li.append(number, timeStamp);
    laps.append(li);

    clearButton.classList.remove("hidden");
}

const clearAll = () => {
    laps.innerHTML=``;
    laps.append(clearButton);
    clearButton.classList.add("hidden");
    
}

startButton.addEventListener("click", start);
resetButton.addEventListener("click", reset);
lapButton.addEventListener("click", lap);
clearButton.addEventListener("click", clearAll);
startButton.addEventListener("click", start);