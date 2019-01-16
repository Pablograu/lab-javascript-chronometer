var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');


function printTime() {

}

function printMinutes() {

}

function printSeconds() {

}

function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {

}

function setSplitBtn() {

}

function setStartBtn() {

}

function setResetBtn() {

}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if (btnLeft.innerHTML === "START") {
        btnLeft.innerHTML = "STOP";
    } else {
        btnLeft.innerHTML = "START";
        }

    if (btnRight.innerHTML === "RESET") {
        btnRight.innerHTML = "SPLIT";
    } else {
        btnRight.innerHTML = "RESET";
        }

    btnLeft.classList.toggle("start")
    btnLeft.classList.toggle("stop")   
    btnRight.classList.toggle("split")
    btnRight.classList.toggle("reset")
    // Set the `btnRight` button with the text SPLIT, and the class `btn split`
       
     
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    
});
