import { FizzBuzz } from ".././src/FizzBuzz";

describe("FizzBuzz should", function() {
    describe("when number is not 3 or 5", function() {
        it("returns the number", () => {
            [
                [1],
                [2],
                [4]
            ].forEach(([number]) => {
                let fizzBuzz = new FizzBuzz();
                let result = fizzBuzz.generate(number);
                expect(result).toBe(number.toString());
            })
        });
    });

    describe("when number is multiple of 5", function() {
        it("returns buzz", () => {
            [
                [5],
                [10],
                [20],
                [25]
            ].forEach(([number]) => {
                let fizzBuzz = new FizzBuzz();
                let result = fizzBuzz.generate(number);
                expect(result).toBe("buzz");
            })
        });
    });

    describe("when number is multiple of 3", function() {
        it("returns fizz", () => {
            [
                [3],
                [6],
                [9],
                [12]
            ].forEach(([number]) => {
                let fizzBuzz = new FizzBuzz();
                let result = fizzBuzz.generate(number);
                expect(result).toBe("fizz");
            })
        });
    });

  });