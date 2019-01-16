// Constructor
function Chronometer() {
   this.currentTime = 0;
   this.intervalId = "";
}

Chronometer.prototype.startClick = function () {
    // var _this = this;
    this.intervalId = setInterval((function(){
    this.currentTime++
    this.setTime()
}).bind(this),1000)
};
    

Chronometer.prototype.setMinutes = function () {
   return Math.floor(this.currentTime/60);
};

Chronometer.prototype.setSeconds = function () {
  return Math.floor(this.currentTime%60);
};

Chronometer.prototype.twoDigitsNumber = function (value) {
   if (value < 10){
       return "0" + value;
   } else{
       return value.toString();
   }
};

Chronometer.prototype.setTime = function () {
  this.twoDigitsNumber(this.setSeconds());
  this.twoDigitsNumber(this.setMinutes());
};

Chronometer.prototype.setMilliseconds = function () {

};

Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId)
};

Chronometer.prototype.resetClick = function () {
    this.currentTime === 0;
};

Chronometer.prototype.splitClick = function () {

};
