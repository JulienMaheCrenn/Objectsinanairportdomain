const {Bag} = require("./airport.js");
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