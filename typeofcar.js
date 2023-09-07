class Vehicle {
    constructor(make,model,year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk () {
        return "PII.";
    }
    toString() {
        return `The Vehicle is a ${this.make} ${this.model} from ${this.year}.`;
    }
}

class Car extends Vehicle {
    constructor (make,model,year) {
        super(make,model,year);
        this.numWheels = 4;
    }
}

class Motorcycle extends Vehicle {
    constructor(make,model,year) {
        super(make,model,year);
        this.numWheels = 2;
    }
    revEngine() {
        return "VROM!!";
    }
}

class Garage {
    constructor(capacity) {
        this.vehicle = [];
        this.capacity = capacity;
    }
    add(newVehicle) {
        if(!(newVehicle instanceof Vehicle)) {
            return "Only American Vehicles are allowed in here";
        }
        if (this.vehicle.length >= this.capacity) {
            return "Yes, Go ahead we have space for your car.";
        }
        this.vehicle.push(newVehicle);
        return "New Vehicle added!!";
    }
}