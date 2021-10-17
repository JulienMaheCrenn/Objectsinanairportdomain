const {Bag, Passenger, Crew} = require("./airport.js");
let suitcase = undefined
let piper = undefined
let bob = undefined


describe("Testing the Bag class and its child objects", () => {

    beforeAll(() => {
        suitcase = new Bag(12);
    })

    test("Passing no value in for weight", () => {
        expect(() => new Bag()).toThrowError("Bag must have a weight");
    });

    test("Testing instance of suitcase", () => {
        expect(suitcase).toBeInstanceOf(Bag);
    });

    test("Testing type of suitcase", () => {
        expect(typeof(suitcase)).toBe("object");
    });
});

describe("Testing for the Passenger class", () => {

    beforeAll(() => {
        bob = new Passenger("Bob", "Passport 123", "47 B");
        bob.addBag("Cabin Bag");
    });

    test("Testing that bob is an instance of passenger", () => {
        expect(bob).toBeInstanceOf(Passenger);
    });

    test("Testing the type of bob's bag attribute", () => {
        expect(typeof(bob.bags)).toBe("object");
    });

    test("Testing that the array length is changed when a new bag is added to the passenger", () => {
        expect(bob.bags.length).toBeGreaterThan(0);
    });
});

describe ("Testing for the Planes class", () => {

    beforeAll(() => {
        piper = new Plane ("Piper");
        piper.board(bob);
    });

    test("Testing the type of the plane type attribute", () => {
        expect(typeof(piper.type)).toBe("String");
    });

    test("Testing that the passengerList array increases when using the board() function", () => {
        expect(piper.passengerList.length).toBeGreaterThan(0);
    });

    test("Testing that piper is an instance of Plane", () => {
        expect(piper).toBeInstanceOf(Plane);
    });
});