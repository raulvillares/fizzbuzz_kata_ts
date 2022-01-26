"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FizzBuzz_1 = require(".././src/FizzBuzz");
describe("FizzBuzz should", function () {
    describe("when number is 1", function () {
        it("returns 1", function () {
            let fizzBuzz = new FizzBuzz_1.FizzBuzz();
            let result = fizzBuzz.generate(1);
            expect(result).toBe("1");
        });
    });
    describe("when number is 2", function () {
        it("returns 2", function () {
            let fizzBuzz = new FizzBuzz_1.FizzBuzz();
            let result = fizzBuzz.generate(2);
            expect(result).toBe("2");
        });
    });
    describe("when number is 3", function () {
        it("returns fizz", function () {
            let fizzBuzz = new FizzBuzz_1.FizzBuzz();
            let result = fizzBuzz.generate(3);
            expect(result).toBe("fizz");
        });
    });
});
