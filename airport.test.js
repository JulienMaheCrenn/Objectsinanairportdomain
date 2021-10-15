const {Bag, Passenger} = require("./airport.js");
let suitcase = null


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