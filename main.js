class Traveler {
  constructor(name) {
    this.name = name;
    this.food = 1;
    this.isHealthy = true;
  }

  hunt() {
    this.food += 2;
  }
  eat() {
    if (this.food === 0) {
      this.isHealthy = false;
    } else {
      this.food -= 1;
    }
  }
}

class Wagon {
  constructor(capacity) {
    this.capacity = capacity;
    this.passengers = [];
  }

  getAvailableSeatCount() {
    return this.capacity - this.passengers.length;
  }

  join(traveler) {
    if (this.getAvailableSeatCount() > 0) {
      this.passengers.push(traveler);
    }
  }

  shouldQuarantine() {
    let ill = 0;
    for (let i = 0; i < this.passengers.length; i = i + 1) {
      console.log(this.passengers[i].healthy);
      if (this.passengers[i].healthy) {
      } else {
        ill = ill + 1;
      }
    }

    if (ill >= 1) {
      return true;
    } else {
      return false;
    }
  }

  totalFood() {
    let total = 0;
    for (let i = 0; i < this.passengers.length; i = i + 1) {
      console.log(this.passengers[i].food);
      total = total + this.passengers[i].food;
    }
    return total;
  }
}
