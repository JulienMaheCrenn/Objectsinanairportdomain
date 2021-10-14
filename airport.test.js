describe("Testing to ensure the bag class throws an error", () => {
    test("Passing no value in for weight", () => {
        expect(() => new Bag()).toThrowError("Bag must have a weight");
    });
});

describe("Ensuring the suitcase object is an instance of the Bag class", () => {
    test("Testing instance of suitcase", () => {
        expect(suitcase).toBeInstanceOf(Bag);
    });
});

describe("Ensuring the suitcase object is an object", () => {
    test("Testing instance of suitcase", () => {
        expect(suitcase).toBe("object");
    });
});