let hrsDigit = document.getElementById("hrsTime");
let days = document.getElementsByTagName("li")
let milliDigit = document.getElementById("milli-seconds");
let themeBtn = document.getElementById("theme-select");
let watchFrame = document.getElementById("watch-container");
let watchScreen = document.getElementById("watch-screen");


function time() {
    let clock = new Date();
    
    var day = clock.getDay();
    var hour = clock.getHours();
    var mins = clock.getMinutes();
    var secs = clock.getSeconds();
    var milliSecs = clock.getMilliseconds();
    
    if (hour < 10) {
        hour = "0" + hour;
    }
    
    if (mins < 10) {
        mins = "0" + mins;
    }
    
    if (secs < 10) {
        secs = "0" + secs;
    }
    
    hrsDigit.innerText = hour + " : " + mins + " : " + secs;
    milliDigit.innerText = milliSecs;
    
    switch (day) {
        case 0:
            days[0].style.color = "white";
            break;
        case 1:
            days[1].style.color = "white";
            break;
        case 2:
            days[2].style.color = "white";
            break;
        case 3:
            days[3].style.color = "white";
            break;
        case 4:
            days[4].style.color = "white";
            break;
        case 5:
            days[5].style.color = "white";
            break;
        case 6:
            days[6].style.color = "white";
            break;
    }
}

setInterval(time, 1);

themeBtn.addEventListener('click', function() {
    if (watchFrame.classList.contains("light") && watchScreen.classList.contains("silver")) {
        watchFrame.classList.remove("light");
        watchScreen.classList.remove("silver")

        watchFrame.classList.add("dark");
        watchScreen.classList.add("black")
    } else {
        watchFrame.classList.remove("dark");
        watchScreen.classList.remove("black")

        watchFrame.classList.add("light");
        watchScreen.classList.add("silver")
    }
});