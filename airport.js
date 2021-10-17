class Bag {
    constructor(weight) {
        if (weight === undefined) {
            throw new Error("Bag must have a weight");
        };
        this.weight = weight;
    };
};


class Person {
    constructor(name) {
        this.name = name;
        this.bags = [];
    };

    addBag(bag) {
        this.bags.push(bag)
    };
};

class Passenger extends Person {
    constructor(name, passportNumber, seatNumber) {
        super(name);
        this.passportNumber = passportNumber;
        this.seatNumber = seatNumber;
    };

    callAttendant() {
        console.log("Excuse me, I'd like some assistance please.");
    };
};

class Crew extends Person {
    constructor(name,rank,staffNumber) {
        super(name);
        this.rank = rank;
        this.staffNumber = staffNumber
    };
};

class Plane {

    constructor(type) {
        this.type = type;
        this.passengerList = [];
    };

    board(passenger) {
        this.passengerList.push(passenger);
    }; 
};

module.exports = {Bag, Crew, Passenger, Plane};