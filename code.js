//function

function Traveler(name, food, isHealthy) {
  this.name = name;
  this.food = 1;
  this.isHealthy = true;
}

Traveler.prototype.hunt = function () {
  this.food += 2;
};
//methods
Traveler.prototype.eat = function () {
  if (this.food <= 0) {
    return (this.isHealthy = false);
  }
  this.food -= 1;
};

//function
function Wagon(capacity, passengers = []) {
  this.capacity = capacity;
  this.passengers = passengers;
}
//methods
Wagon.prototype.getAvailableSeatCount = function () {
  return this.capacity - this.passengers.length;
};

Wagon.prototype.join = function (traveler) {
  if (this.getAvailableSeatCount() >= 1) {
    this.passengers.push(traveler);
  }
};
Wagon.prototype.shouldQuarantine = function () {
  for (let i = 0; this.passengers.length; i += 1) {
    if (this.passengers[i].isHealthy === false) {
      return true;
    }
  }
};
Wagon.prototype.totalFood = function () {
  let totalNumber = 0;
  for (let i = 0; i < this.passengers.length; i += 1) {
    totalNumber += this.passengers[i].food;
  }
  return totalNumber;
};
